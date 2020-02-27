import { Client } from 'discord.js'
import Logger from '../Logger'

class EventHandler {
  _name: string

  constructor(eventName: string) {
    this._name = eventName
  }

  bind(client: Client, e: any) {
    Logger.warn('No Handler Given')
  }
}

export default EventHandler
