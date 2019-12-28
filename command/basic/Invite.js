const Command = require('../Command')
const Embed = require('../../utils/embed')

class Invite extends Command {
  constructor () {
    const info = {
      name: 'invite',
      aliases: ['초대'],
      description: '봇의 초대링크를 보여줍니다.',
      isAdminOnly: false
    }

    super(info)
  }

  run (client, msg, args, cmd) {
    const link = 'https://discordapp.com/api/oauth2/authorize?client_id=576763498558652425&permissions=8&scope=bot'

    const embed = new Embed('random').setTitle(link)

    msg.channel.send(embed)
  }
}

module.exports = Invite
