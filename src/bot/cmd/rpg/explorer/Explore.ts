import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import RegionManager from "../lib/RegionManager";

class Explore extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(args.length < 1) {
      const embed = new RichEmbed()
        .setTitle('사용법')
        .setDescription('$탐험 <지역>')

      msg.channel.send(embed)
      return
    }

    msg.channel.send('탐험을 준비하는중...').then(m => {
      const region = RegionManager.getRegion(args[0])
      const edit = m instanceof Message ? m : m[0]

      if(!region) {
        const embed = new RichEmbed()
          .setTitle('해당 지역을 찾을 수 없습니다.')
          .setColor('#ff3333')
        
        edit.edit(embed)
        return
      }
    })
  }

  desc = {
    name: "explore",
    description: "해당 지역을 탐험합니다.",
    aliases: ["탐험", "원정"]
  }
}

export default Explore