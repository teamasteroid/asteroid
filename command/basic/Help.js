const Command = require('../Command')
const CommandExecutor = require('../CommandExecutor')
const Embed = require('../../utils/embed')
const isOwner = require('../../utils/Owner')

class Help extends Command {
  constructor () {
    const info = {
      name: 'help',
      aliases: ['도움', '도움말'],
      description: '도움말을 보여줍니다.',
      isAdminOnly: false
    }

    super(info)
  }

  run (client, msg, args, cmd, lang) {
    const commands = CommandExecutor.getCommands()
    const owner = isOwner(msg.author.id)

    let embed = new Embed()
      .setTitle(lang.command.help.title)
    let i = 0

    commands.forEach(ce => {
      const info = ce.cmd.commandInfo

      if (i > 15) {
        msg.channel.send(embed)

        embed = new Embed()
          .setTitle(lang.command.help.continueTitle)
        i = 0
      }

      if (!owner && info.isAdminOnly) return

      embed.addField(info.name, info.description, true)
      i++
    })

    msg.channel.send(embed)
  }
}

module.exports = Help
