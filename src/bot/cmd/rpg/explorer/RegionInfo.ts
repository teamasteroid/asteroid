import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import * as regions from '../lib/region.json'

class RegionInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(args.length < 1) {
      const embed = new RichEmbed()
        .setTitle('사용법')
        .addField('$ri <지역 id>', '해당 지역의 정보를 봅니다.')

      msg.channel.send(embed)
      return
    }
  }

  desc = {
    name: "regioninfo",
    description: "해당 지역의 정보를 봅니다.",
    aliases: ["ri", '지역정보', 'region', '지역']
  }
}

export default RegionInfo