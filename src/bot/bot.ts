import { Client, Message } from 'discord.js'
import { info } from '../SLog';
import { bot } from '../config/const.json'
import Command from './command'

class Bot {
  static client: Client
  static prefix: string = '$'

  static login(): void {
    Bot.client = new Client()
    Command.init()

    Bot.client.on('ready', () => {
      info(`Logged in as ${Bot.client.user.tag}`)
    })
    
    Bot.client.on('message', (msg: Message) => {
      if(msg.channel.type == 'dm') return
      if(msg.content.startsWith(Bot.prefix)) return

      const cmd = msg.content.slice(Bot.prefix.length, msg.content.length).split(' ')[0]
      const arg = msg.content.slice(Bot.prefix.length, msg.content.length).split(' ')
      const args = arg.slice(1, msg.content.slice(Bot.prefix.length, msg.content.length).split(' ').length)

      Command.execute(cmd, Bot.client, msg, args)
    
    })
    Bot.client.login(bot.token)
  }
}

export default Bot