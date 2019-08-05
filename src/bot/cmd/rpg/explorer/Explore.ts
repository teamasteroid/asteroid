import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import RegionManager from "../lib/RegionManager";
import ItemManager from "../lib/ItemManager";

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

      edit.edit('탐험을 떠나는중...')
      setTimeout(() => {
        edit.edit('탐험중...')

        const avail = region.available
        let message = '```diff'
        
        //나중에 보유 아이템에 따라 시도횟수 다르게 설정할 것.
        for(let i = 0; i < 10; i++) {
          const random = Math.floor(Math.random() * avail.length)
          const propose = ItemManager.getItemList().toJS()['TOOL'][avail[random].item]
                          || ItemManager.getItemList().toJS()['RESOURCE'][avail[random].item]
          if(Math.random() <= avail[random].probability) {
            message += `\n+ ${propose.name || propose} 획득 성공! ㅡ 성공확률: ${avail[random].probability * 100}%`
          } else {
            message += `\n- ${propose.name || propose} 획득 실패! ㅡ 실패확률: ${100 - avail[random].probability * 100}%`
          }
        }

        setTimeout(() => {
          edit.edit('탐험 완료')
          
          const embed = new RichEmbed()
            .setTitle(`탐험 완료! (${region.name})`)
            .setDescription(message + '```')
          
          edit.edit(embed)
        }, 5000)
      }, 1000)
    })
  }

  desc = {
    name: "explore",
    description: "해당 지역을 탐험합니다.",
    aliases: ["탐험", "원정"]
  }
}

export default Explore