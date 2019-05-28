import CE from "../CE";
import { Client, Message, RichEmbed } from "discord.js";
import * as items from './lib/item.json'

class ItemInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(!args || args.length < 1) {
      const embed = new RichEmbed()
        .setTitle('사용법')
        .addField('$ii <아이템 id>', '해당 아이템의 정보를 봅니다.')
        .addField('$ii <아이템 이름>', '해당 아이템의 정보를 봅니다 (추천하지 않음)')

      msg.channel.send(embed)
      return
    }

    const ii = args[0].toUpperCase()
    // 아이템 매니저로부터 아이템목록을 받아 검사하기
    if(items.RESOURCE["WOOD"]) {

    }
  }

  desc = {
    name: "iteminfo",
    description: "아이템의 정보를 봅니다.",
    aliases: ["ii", "아이템", "searchitem", "si", "about"]
  }
}

export default ItemInfo