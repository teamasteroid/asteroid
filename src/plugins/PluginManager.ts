import Plugin from './Plugin'
import { Collection } from 'discord.js'

class PluginManager {
  static plugins: Collection<string, Plugin>
  
  static init() {
    PluginManager.plugins = new Collection()
  }

  static register(name: string, plugin: Plugin) {
    PluginManager.plugins.set(name, plugin)
    console.log(`${name} plugin set`)
  }
}

export default PluginManager
