const Core = require('../data/core.json')
const Logger = require('korean-logger')
const EventHandler = require('./EventHandler')

class OnMessage extends EventHandler {
  constructor() {
    super('message')
  }

  bind(client, msg) {
    if(msg.author.bot) return
    if(!msg.content.startsWith(Core.bot.prefix)) return

    const args = msg.content.slice(Core.bot.prefix.length).trim().split(/ |\n+/g)
    const cmd = args.shift().toLowerCase()

    Logger.log(cmd)
    Logger.log(args)
  }
}

module.exports = OnMessage