import { Client, Message, RichEmbed } from "discord.js";
import Bot from '../../bot'
import CE from "../CE";

class Black extends CE{
  command(client: Client, msg: Message, args?: string[]): void {
    
  }

  desc = {
    name: "black",
    description: "해당 사용자를 블랙리스트에 추가합니다.",
    aliases: ['핑', 'pong']
  }
}

export default Black