import { Client, Message, RichEmbed } from "discord.js";
import { info } from "../../SLog";
import Bot from '../bot'

class Ping {
  static ping(client: Client, msg: Message, args?: string[]): void {
    const embed = new RichEmbed()
      .setTitle(`**${Math.round(client.ping)}** ms`)
      .setDescription(`핑은 봇이 돌아가는 서버에서 측정되었습니다.`)

    info(msg.author.id + ' : ping')
    msg.channel.send(embed)
  }

  static getPing(): number {
    return Math.round(Bot.client.ping)
  }
}

export default Ping