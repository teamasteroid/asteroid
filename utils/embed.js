const { RichEmbed } = require('discord.js')

class Embed extends RichEmbed {
  constructor() {
    super()
    this.color = '#8ff'
  }
}

module.exports = Embed