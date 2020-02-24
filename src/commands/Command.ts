import { Client, Message } from 'discord.js'

class Command {
  execute(client: Client, msg: Message, args: string[], cmd: string) {
    msg.reply('Nothging given')
  }
}

export default Command