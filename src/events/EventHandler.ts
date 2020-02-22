import { Client } from 'discord.js'

class EventHandler {
  _name: string

  constructor(eventName: string) {
    this._name = eventName
  }

  bind(client: Client, e: any) {
    console.warn('No given event handler')
  }
}

export default EventHandler
