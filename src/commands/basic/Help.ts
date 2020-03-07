import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'
import CommandManager from '../CommandManager'
import config from '../../config/config'

class Help extends Command {
  constructor() {
    const meta: CommandMeta = {
      name: 'help',
      description: '명령어 목록을 보여줍니다.',
      alias: ['도움', '도움말'],
      category: 'basic',
      isAdminOnly: false,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    if (args.length < 1) {
      let embed = new Embed()
        .setTitle('도움말')
      let i: number = 0

      CommandManager.categories.forEach((cat) => {
        if (i > 20) {
          msg.channel.send(embed)
          embed = new Embed()
            .setTitle('도움말 계속')

          i = 0
        }

        embed.addField(cat, `${config.bot.prefix}help ${cat}`, true)
        i++
      })

      msg.channel.send(embed)
    } else {
      if (!CommandManager.categories.includes(args[0])) {
        const embed = new Embed('err')
          .setTitle('카테고리를 찾을 수 없습니다')
        
        msg.channel.send(embed)
        return
      }

      let embed = new Embed()
        .setTitle('도움말')
      let i = 0

      CommandManager.commands.array().forEach((cmd) => {
        if (cmd.meta.category == args[0]) {
          if (i > 20) {
            msg.channel.send(embed)

            embed = new Embed()
              .setTitle('도움말 (계속)')
          }

          embed.addField(cmd.meta.name, cmd.meta.description, true)
          i++
        }
      })

      msg.channel.send(embed)
    }
  }
}

export default Help
