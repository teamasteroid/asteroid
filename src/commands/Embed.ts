import { RichEmbed } from 'discord.js'

class Embed extends RichEmbed {
  constructor (type?: string) {
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
      case 'random':
        const rand = Math.floor(Math.random() * 0xffffff)
        this.color = rand
        return
      default:
        this.color = 8978431
        return
    }
  }
}

export default Embed
