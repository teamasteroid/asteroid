import CE from "../CE";
import { Client, Message, RichEmbed } from "discord.js";

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
  }

  desc = {
    name: "iteminfo",
    description: "아이템의 정보를 봅니다.",
    aliases: ["ii", "아이템", "searchitem", "si", "about"]
  }
}

export default ItemInfo