import { Collection } from 'discord.js'
import Command from './Command'

class CommandManager {
  static commands: Collection<string, Command>
  static aliases: Collection<string, Command>

  commandExecutors: Command[] = []
  categories: string[] = []

  static init() {
    CommandManager.commands = new Collection()
    CommandManager.aliases = new Collection()
  }
}

export default CommandManager
