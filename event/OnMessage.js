const Core = require('../data/core.json')
const Logger = require('korean-logger')
const EventHandler = require('./EventHandler')
const CommandExecutor = require('../command/CommandExecutor')

class OnMessage extends EventHandler {
  constructor () {
    super('message')
  }

  bind (client, msg) {
    if (msg.author.bot) return
    if (!msg.content.startsWith(Core.bot.prefix)) return

    const args = msg.content.slice(Core.bot.prefix.length).trim().split(/ |\n+/g)
    const cmd = args.shift().toLowerCase()

    CommandExecutor.commands.forEach(ce => {
      if (ce.cmd.commandInfo.name === cmd || ce.cmd.commandInfo.aliases.includes(cmd)) {
        ce.cmd.run(client, msg, args, cmd)
        Logger.log(`${msg.author.id} : ${cmd}`)
      }
    })
  }
}

module.exports = OnMessage
