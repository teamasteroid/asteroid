import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'

class Invite extends Command{
  constructor() {
    const meta: CommandMeta = {
      name: 'black',
      description: '유저를 정지합니다.',
      alias: ['밴', '블랙', '정지', '블랙리스트'],
      category: 'basic',
      isAdminOnly: false,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    
  }
}

export default Invite
