import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import ItemManager from "../lib/ItemManager";

class ItemInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(!args || args.length < 1) {
      const embed = new RichEmbed()
        .setTitle('사용법')
        .addField('$ii <아이템 id>', '해당 아이템의 정보를 봅니다.')

      msg.channel.send(embed)
      return
    }

    const ii = args[0].toUpperCase()
    const items = ItemManager.getItemList()
    if(items.getIn(['RESOURCE', ii])) {
      // Requested item which is reousrce
      const embed = new RichEmbed()
        .setTitle('오류')
        .setDescription('자원류는 검색할 수 없습니다.')

      msg.channel.send(embed)
      return
    }

    const item = items.getIn(['TOOL', ii])
    if(!item) {
      ///Not Found
      const embed = new RichEmbed()
        .setTitle('실패')
        .setDescription('해당 아이템을 찾을 수 없습니다.')

      msg.channel.send(embed)
      return
    }

    const required = item.toJS().require
    let rmsg: string = ''
    required.forEach((re: any) => {
      rmsg += `${items.getIn(['RESOURCE', re.item])} ${re.quantity}개 `
    })

    const embed = new RichEmbed()
      .setTitle('아이템 정보')
      .addField(`이름`, item.toJS().name)
      .addField(`필요 사항`, rmsg)

    msg.channel.send(embed)
  }

  desc = {
    name: "iteminfo",
    description: "아이템의 정보를 봅니다.",
    aliases: ["ii", "아이템", "searchitem", "about"]
  }
}

export default ItemInfo