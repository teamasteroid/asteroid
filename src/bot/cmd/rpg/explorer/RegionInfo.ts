import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import RegionManager from "../lib/RegionManager";

class RegionInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(!args || args.length < 1) {
      const embed = new RichEmbed()
        .setTitle('사용법')
        .addField('$ri <지역 id>', '해당 지역의 정보를 봅니다.')

      msg.channel.send(embed)
      return
    }

    const regions = RegionManager.getItemList()

    if(!regions.getIn([args[0]])) {
      const embed = new RichEmbed()
        .setTitle('해당 지역을 찾을 수 없습니다.')
        .setColor('#ff3333')
      
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