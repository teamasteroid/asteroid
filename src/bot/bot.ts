import { Client, Message } from 'discord.js'
import { info } from '../SLog';
import { bot } from '../config/const.json'

class Bot {
  static client: Client

  static login(): void {
    Bot.client = new Client()

    Bot.client.on('ready', () => {
      info(`Logged in as ${Bot.client.user.tag}`)
    })
    
    Bot.client.on('message', (msg: Message) => {
      if(msg.content === `$ping`) {
        msg.channel.send(`**${Bot.client.ping}** ms`)
      }
    })
    
    Bot.client.login(bot.token)
  }
}

export default Bot