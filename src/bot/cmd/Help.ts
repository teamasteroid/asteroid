import { Client, Message, RichEmbed } from "discord.js";
import CE from "./CE";
import Command from '../command'

class Help extends CE {
  command(client: Client, msg: Message, args?: string[]): void {
    const ces = Command.getCes()

    let embed = new RichEmbed()
      .setTitle('도움말')

    ces.forEach((ce, i) => {
      if(i >= 20) {
        msg.channel.send(embed)
        embed = new RichEmbed()
          .setTitle('도움말 (계속)')
      }

      embed.addField(ce.desc.name, ce.desc.description)
    })
  }

  desc = {
    name: "help",
    description: "도움말을 보여줍니다..",
    aliases: ['도움', '도움말', '헬프']
  }
}

export default Help