import { Client, Message, RichEmbed } from "discord.js";
import Bot from '../../bot'
import CE from "../CE";

class Black extends CE{
  command(client: Client, msg: Message, args?: string[]): void {
    if(msg.author.id !== '352755226224361482') {
      const embed = new RichEmbed()
        .setTitle('Error : Permission Denied')
        .setColor('#ff3333')
      
      msg.channel.send(embed)
      return
    }
  }

  desc = {
    name: "black",
    description: "해당 사용자를 블랙리스트에 추가합니다.",
    aliases: ['블랙', '블랙리스트']
  }
}

export default Black