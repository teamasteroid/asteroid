import CE from "../CE";
import { Client, Message, RichEmbed } from "discord.js";

class SetItem extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(msg.author.id !== '352755226224361482') {
      const embed = new RichEmbed()
        .setColor('#ff5555')
        .setTitle('Permission Denied')

      msg.channel.send(embed)
      return
    }

    msg.reply('Forbidden')
  }

  desc = {
    name: 'setitem',
    description: "아이템을 설정합니다(Admin Only)",
    aliases: ['si', '아이템설정']
  }
}

export default SetItem