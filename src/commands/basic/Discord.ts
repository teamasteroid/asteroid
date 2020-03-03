import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'

class Discord extends Command{
  constructor() {
    const meta: CommandMeta = {
      name: 'discord',
      description: 'Asteroid 공식서버 링크를 보여줍니다.',
      alias: ['디스코드', '디코', '디코링크', '디스코드링크'],
      category: 'basic',
      isAdminOnly: false,
      parameter: 0
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    const embed = new Embed('random')
      .setTitle('디스코드')
      .setDescription('[클릭하면 이동합니다](https://discord.gg/UzmJ3h8)')
    
    msg.channel.send(embed)
  }
}

export default Discord
