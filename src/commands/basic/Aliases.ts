import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'
import CommandManager from '../CommandManager'
import Config from '../../config/config'

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
    if (args.length < 1) {
      const embed = new Embed()
        .setTitle('사용법')
        .setDescription(`${Config.bot.prefix}alias <명령어>`)

      msg.channel.send(embed)

      return
    }

    let command: Command | null = null

    CommandManager.commands.forEach(c => {
      if (c.meta.name == args[0]) {
        command = c
        return
      }
    })

    if (!command) {
      const embed = new Embed('err')
        .setTitle(`명령어 ${args[0]}을 찾을 수 없습니다.`)
        .setDescription(`명령어 목록은 ${Config.bot.prefix}help로 볼 수 있습니다.`)

      msg.channel.send(embed)
      return
    }

    let as: string = ''

    command!.meta.alias.forEach((a, i) => {
      as += a
      
      if(i != command!.meta.alias.length - 1) {
        as += ', '
      }
    })

    const embed = new Embed()
      .setTitle(`${args[0]}의 별칭`)
      .setDescription(as)

    msg.channel.send(embed)
  }
}

export default Alias
