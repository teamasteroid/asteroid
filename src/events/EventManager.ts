import { Collection } from 'discord.js'
import EventHandler from './EventHandler'
import Asteroid from '../index'

class EventManager {
  static events: Collection<string, EventHandler>

  static init() {
    EventManager.events = new Collection()
  }

  static bind(name: string, handler: EventHandler) {
    EventManager.events.set(name, handler)
    Asteroid.on(name, (e: any) => handler.bind(Asteroid, e))
    console.log(`${name} event binded`)
  }
} 

export default EventManager