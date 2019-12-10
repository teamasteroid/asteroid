const Command = require('../Command')
const commandInfo = require('../CommandInfo')

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
    msg.reply('Wa! Sans!')
  }
}

module.exports = Help