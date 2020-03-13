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
      const embed = new Embed()
        .setTitle('사용법')
        .setDescription('black <`@mention`>')

      msg.channel.send(embed)
      return
    }

    let user = msg.mentions.users.first()

    if(!user) {
      if (msg.guild) {
        client.users.fetch(args[0]).then(idUser => {
          if(idUser) {
            user = idUser
            return true
          } else {
            return false
          }
        })
      }
    }

    if(!user) {
      const embed = new Embed('err')
        .setTitle('실패')
        .setDescription('해당 유저를 찾을 수 없습니다.')
      
      msg.channel.send(embed)
      return
    }

    msg.channel.send(user.id)
  }
}

export default Black
