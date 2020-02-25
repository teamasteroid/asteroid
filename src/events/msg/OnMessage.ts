import EventHandler from '../EventHandler'
import { Client, Message } from 'discord.js'
import CommandManager from '../../commands/CommandManager'

class OnMessage extends EventHandler {
  constructor() {
    super('message')
  }

  bind (client: Client, e: Message) {
    CommandManager.executeCommand(e)
  }
}

export default OnMessage
