import Asteroid from './Asteroid'
import config from './config/config'
import EventManager from './events/EventManager'

EventManager.init()
const bot = new Asteroid(config)

export default bot
