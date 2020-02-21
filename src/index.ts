import Client from './Asteroid'
import config from './config/config'

const Asteroid = new Client(config)

Asteroid.on('ready', () => {
  console.log('bot ready')
})

Asteroid.login()
