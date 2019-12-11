const Command = require('../Command')
const CommandExecutor = require('../CommandExecutor')
const Embed = require('../../utils/embed')
class Help extends Command {
  constructor() {
    const info = {
      name: 'help',
      aliases: ['도움', '도움말'],
      description: '도움말을 보여줍니다.',
      isAdminOnly: false
    }

    super(info)
  }

  run(client, msg, args, cmd) {
    const commands = CommandExecutor.getCommands()
    let embed = new Embed()
      .setTitle('도움말')
    let i = 0

    commands.forEach(ce => {
      const info = ce.cmd.commandInfo

      if(i > 15) {
        msg.channel.send(embed)

        embed = new Embed()
        .setTitle('도움말 (계속)')
        i = 0
      }

      embed.addField(info.name, info.description, true)
      i++
    })

    msg.channel.send(embed)
  }
}

module.exports = Help