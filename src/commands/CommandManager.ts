import { Collection } from 'discord.js'
import Command from './Command'

import Invite from './basic/Invite'

class CommandManager {
  static commands: Collection<string, Command>
  static aliases: Collection<string, Command>

  static commandExecutors: Command[] = []
  static categories: string[] = []

  static init() {
    CommandManager.commands = new Collection()
    CommandManager.aliases = new Collection()

    CommandManager.commandExecutors = [
      new Invite()
    ]

    CommandManager.commandExecutors.forEach(ce => CommandManager.register(ce))
  }

  static register (command: Command) {
    CommandManager.commands.set(command.meta.name, command)
    console.log(`${command.meta.name} command set`)

    command.meta.alias.forEach(a => {
      CommandManager.aliases.set(a, command)
      console.log(`${a} command set`)
    })
  }
}

export default CommandManager
