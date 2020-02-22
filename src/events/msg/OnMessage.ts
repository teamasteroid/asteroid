import EventHandler from '../EventHandler'
import { Client, Message } from 'discord.js'

class OnMessage extends EventHandler {
  constructor() {
    super('message')
  }

  bind (client: Client, e: Message) {
    console.log(e.content)
  }
}

export default OnMessage
