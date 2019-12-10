const { RichEmbed } = require('discord.js')

class Embed extends RichEmbed {
  constructor() {
    super()
    this.color = 8978431
  }
}

module.exports = Embed