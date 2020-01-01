import Client from './Asteroid'
import Core from './config/config'

const Asteroid = new Client()

Asteroid.on('ready', () => {
  console.log('bot ready')
})

Asteroid.login(Core.bot.token)