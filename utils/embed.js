const { RichEmbed } = require('discord.js')

class Embed extends RichEmbed {
  constructor (type) {
    super()

    const t = type ? type.trim().toLowerCase() : 'default'
    switch(t) {
      case 'error':
      case 'err':
        this.color = 16736609
        return
      case 'warn':
        this.color = 16756838
        return
      default:
        this.color = 8978431
        return
    }
  }
}

module.exports = Embed
