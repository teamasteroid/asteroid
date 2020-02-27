import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'

class Invite extends Command{
  constructor() {
    const meta: CommandMeta = {
      name: 'invite',
      description: '봇의 초대링크를 보냅니다.',
      alias: ['초대', '초대링크'],
      category: 'basic',
      isAdminOnly: false,
      parameter: 0
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    const embed = new Embed('random')
      .setTitle('초대링크')
      .setDescription('[클릭하면 이동합니다](https://discordapp.com/api/oauth2/authorize?client_id=576763498558652425&permissions=8&scope=bot)')
    
    msg.channel.send(embed)
  }
}

export default Invite
