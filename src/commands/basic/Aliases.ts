import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'

class Alias extends Command {
  constructor() {
    const meta: CommandMeta = {
      name: 'alias',
      description: '해당 명령어의 별명을 보여줍니다.',
      alias: ['별칭', '별명'],
      category: 'basic',
      isAdminOnly: false,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    
  }
}

export default Alias
