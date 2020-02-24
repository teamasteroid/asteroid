import Asteroid from './Asteroid'
import config from './config/config'
import EventManager from './events/EventManager'
import PluginManager from './plugins/PluginManager'
import CommandManager from './commands/CommandManager'

EventManager.init()
PluginManager.init()
CommandManager.init()
const bot = new Asteroid(config)

export default bot
