const { Client } = require('discord.js')
const Logger = require('korean-logger')
const Core = require('./data/core.json')
const OnMessage = require('./event/OnMessage')
const CommandExecutor = require('./command/CommandExecutor')
const { Help, ServerList } = require('./command')

class Asteroid extends Client {
  constructor(config) {
    super()
    this.config = config

    this.on('ready', () => {
      this.user.setActivity(`${this.config.bot.prefix}help`)
      Logger.success('플레이 메세지 세팅됨.')
    })

    this.registerEvent(new OnMessage())

    CommandExecutor.register(new Help(), 'basic')
    CommandExecutor.register(new ServerList(), 'basic')

    this.login(this.config.bot.token).then(() => Logger.success(`${this.user.tag} 로그인됨`))
  }

  registerEvent(eventHandler) {
    const { eventName, bind } = eventHandler
    this.on(eventName, e => bind(this, e))
    Logger.success(`${eventName} 이벤트 등록됨.`)
  }
}

module.exports = new Asteroid(Core)