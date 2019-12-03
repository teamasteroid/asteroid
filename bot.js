const { Client } = require('discord.js')
const Logger = require('korean-logger')

class Asteroid extends Client {
  constructor(config) {
    super()
    this.config = config

    this.on('ready', () => {
      this.user.setActivity(`${this.config.bot.prefix}help`)
      Logger.success('플레이 메세지 세팅됨.')
    })

    this.login(this.config.bot.token).then(() => Logger.success(`${this.user.tag} 로그인됨`))
  }
}

module.exports = Asteroid