const Logger = require('korean-logger')

class Command {
  constructor (cmdInfo) {
    this.commandInfo = cmdInfo
  }

  run (client, msg, args, cmd, lang) {
    Logger.warn('No executable actions given')
  }
}

module.exports = Command
