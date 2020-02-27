import { Client } from 'discord.js'
import { Config } from './config/config'
import EventManager from './events/EventManager'
import OnMessage from './events/msg/OnMessage'
import Logger from './Logger'

class Asteroid extends Client {
  _config: Config

  constructor(config: Config) {
    super()

    this._config = config

    this.on('ready', () => Logger.info('Bot Ready'))
    
    super.login(this._config.bot.token).then(this.bindEvents)
  }
  
  bindEvents() {
    EventManager.bind('message', new OnMessage())
  }
}

export default Asteroid
