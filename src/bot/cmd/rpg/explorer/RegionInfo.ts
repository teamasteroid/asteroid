import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import RegionManager from "../lib/RegionManager";
import ItemManager from "../lib/ItemManager";

class RegionInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {
    msg.channel.send('검색중...').then(e => {
      let m

      if(e instanceof Message) m = e
      else m = e[0]

      if(!args || args.length < 1) {
        const embed = new RichEmbed()
          .setTitle('사용법')
          .addField('$ri <지역 id>', '해당 지역의 정보를 봅니다.')
  
        m.edit(embed)
        return
      }
  
      const regions = RegionManager.getItemList()
      const items = ItemManager.getItemList()
      let region
  
      if(!regions.getIn([args[0].toUpperCase()])) {
        Object.keys(regions.toJS()).map(k => regions.toJS()[k]).forEach((r: any) => {
          if(r.name == args[0].toUpperCase().trim()) {
            region = r
          }
        })

        if(!region) {
          const embed = new RichEmbed()
            .setTitle('해당 지역을 찾을 수 없습니다.')
            .setColor('#ff3333')
          
          m.edit(embed)
          return
        }
      } else 
        region = regions.getIn([args[0].toUpperCase()]).toJS()
  
      const embed = new RichEmbed()
        .setTitle(region.name)
        .setDescription(`거리: ${region.distance}km`)

      region.available.forEach((a: any) => {
        embed.addField(items.getIn(['RESOURCE', a.item]), a.probability * 100 + "%", true)
      })

      m.edit(embed)
    })
  }

  desc = {
    name: "regioninfo",
    description: "해당 지역의 정보를 봅니다.",
    aliases: ["ri", '지역정보', 'region', '지역']
  }
}

export default RegionInfo