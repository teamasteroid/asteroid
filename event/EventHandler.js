const Logger = require('discord.js')

class EventHandler {
  constructor (eventName) {
    this.eventName = eventName
  }

  bind (client, e) {
    Logger.warn('No Handler given')
  }
}

module.exports = EventHandler
