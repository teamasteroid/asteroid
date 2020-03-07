import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'

class Black extends Command{
  constructor() {
    const meta: CommandMeta = {
      name: 'black',
      description: '유저를 정지합니다.',
      alias: ['밴', '블랙', '정지', '블랙리스트'],
      category: 'basic',
      isAdminOnly: true,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    if (args.length < 1) {
      const embed = new Embed('err')
        .setTitle('실패')
        .setDescription('플레이어를 지목하십시오.')

      msg.channel.send(embed)
      return
    }
  }
}

export default Black
