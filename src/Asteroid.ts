import { Client } from 'discord.js'
import { Config } from './config/config'
import EventManager from './events/EventManager'
import OnMessage from './events/msg/OnMessage'

class Asteroid extends Client {
  _config: Config

  constructor(config: Config) {
    super()

    this._config = config

    this.on('ready', () => console.log('bot ready'))
    
    super.login(this._config.bot.token).then(this.bindEvents)
  }
  
  bindEvents() {
    EventManager.bind('message', new OnMessage())
  }
}

export default Asteroid
