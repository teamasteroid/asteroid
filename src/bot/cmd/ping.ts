import { Client, Message, RichEmbed } from "discord.js";
import { info } from "../../SLog";
import Bot from '../bot'
import CE from "./CE";

class Ping extends CE{
  command(client: Client, msg: Message, args?: string[]): void {
    const embed = new RichEmbed()
      .setTitle(`**${Math.round(client.ping)}** ms`)
      .setDescription(`핑은 봇이 돌아가는 서버에서 측정되었습니다.`)

    msg.channel.send(embed)
  }

  getPing(): number {
    return Math.round(Bot.client.ping)
  }

  desc = {
    name: "ping",
    description: "봇의 핑을 보여줍니다.",
    aliases: ['핑', 'pong']
  }
}

export default Ping