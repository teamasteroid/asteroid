const Logger = require('korean-logger')

class CommandExecutor {
  static register(cmd, category) {
    if(!this.commands) this.commands = []

    CommandExecutor.commands.push({cmd, category})
    Logger.info(`${cmd.commandInfo.name} 명령어 등록됨.`)
  }

  static getCommands() {
    return CommandExecutor.commands
  }
}

module.exports = CommandExecutor