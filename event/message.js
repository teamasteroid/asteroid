const Core = require('../data/core.json')
const Logger = require('korean-logger')

module.exports = (client, msg) => {
  if(msg.author.bot) return
  if(!msg.content.startsWith(Core.bot.prefix)) return

  const args = msg.content.slice(Core.bot.prefix.length).trim().split(/ |\n+/g)
  const cmd = msg.shift().toLowerCase()

  Logger.log(cmd)
  Logger.log(args)
}