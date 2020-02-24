import { Client, Message } from 'discord.js'

class Invite {
  execute(client: Client, msg: Message, args: string[], cmd: string) {
    msg.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=576763498558652425&permissions=0&scope=bot')
  }
}

export default Invite
