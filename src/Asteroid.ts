import { Client } from 'discord.js'
import { Config } from './config/config'

class Asteroid extends Client {
  _config: Config

  constructor(config: Config) {
    super()

    this._config = config

    super.login(this._config.bot.token)
  }
}

export default Asteroid