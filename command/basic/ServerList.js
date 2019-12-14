const Command = require('../Command')

class ServerList extends Command {
  constructor () {
    const info = {
      name: 'serverlist',
      aliases: ['서버리스트', 'servers'],
      description: '봇이 있는 서버를 보여줍니다.',
      isAdminOnly: true
    }

    super(info)
  }

  run (client, msg, args, cmd) {
    let servers = ''

    client.guilds.array().forEach(g => {
      servers += g.name + '\n'
    })

    msg.channel.send(servers)
  }
}

module.exports = ServerList
