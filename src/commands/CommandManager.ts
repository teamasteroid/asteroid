import { Collection, Message, Client } from 'discord.js'
import Command from './Command'
import config from '../config/config'
import Asteroid from '../index'
import Admin from '../config/Admin'
import Logger from '../Logger'
import UserManager from '../database/UserManager'

import Invite from './basic/Invite'
import Discord from './basic/Discord'
import Help from './basic/Help'
import Black from './basic/Black'
import Alias from './basic/Aliases'

import UserInfo from './game/user/UserInfo'

class CommandManager {
  static commands: Collection<string, Command>
  static aliases: Collection<string, Command>

  static commandExecutors: Command[] = []
  static categories: string[] = []

  static init() {
    CommandManager.commands = new Collection()
    CommandManager.aliases = new Collection()

    CommandManager.commandExecutors = [
      new Invite(),
      new Discord(),
      new Help(),
      new Black(),
      new Alias(),

      new UserInfo(),
    ]

    CommandManager.commandExecutors.forEach(ce => CommandManager.register(ce))
  }

  static register (command: Command) {
    const isNewCat = !CommandManager.categories.includes(command.meta.category)
    if (isNewCat) CommandManager.categories.push(command.meta.category)

    CommandManager.commands.set(command.meta.name, command)
    Logger.info(`${command.meta.name} command set`)

    command.meta.alias.forEach(a => {
      CommandManager.aliases.set(a, command)
      Logger.info(`${a} command set`)
    })
  }

  static executeCommand(msg: Message) {
    if(msg.author.bot) return
    if (!msg.content.startsWith(config.bot.prefix)) return

    const content = msg.content
    const args = content.slice(config.bot.prefix.length).trim().split(/ |\n+/g)
    const cmd = (args.shift() || '').toLowerCase()
    const ce = CommandManager.commands.get(cmd)
    const al = CommandManager.aliases.get(cmd)

    if(!ce) {
      if(al) {
        if (al.meta.isAdminOnly && !Admin.isAdmin(msg.author.id)) {
          return Admin.reject(msg)
        }

        CommandManager.execute(al, Asteroid, msg, args, cmd)
      }
    } else {
      if (ce.meta.isAdminOnly && !Admin.isAdmin(msg.author.id)) {
        return Admin.reject(msg)
      }

      CommandManager.execute(ce, Asteroid, msg, args, cmd)
    }
  }
  
  static execute(ce: Command, client: Client, msg: Message, args: string[], cmd: string) {
    UserManager.isNewUser(msg)
      .then(isNew => {
        if (isNew) UserManager.createNewUser(msg)
      })
    
    Logger.info(msg.author.id + ' ' + cmd)
    ce.execute(Asteroid, msg, args, cmd)
  }
}

export default CommandManager
