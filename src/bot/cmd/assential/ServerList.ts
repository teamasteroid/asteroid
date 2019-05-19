import { Client, Message, RichEmbed } from "discord.js";
import CE from "../CE";

class ServerList extends CE{
  command(client: Client, msg: Message, args: string[]) {
    const bicon = client.user.displayAvatarURL
    let string = ''
    client.guilds.forEach(guild =>  string += guild.name + '\n')

    const botembed = new RichEmbed()
        .setColor("#000FFF")
        .addField("**봇이 가입된 서버목록**", string)
        .setImage(bicon)
    msg.channel.send(botembed);
  }
  desc = {
    name: "serverlist",
    description: "봇이 있는 서버의 리스트를 보여줍니다.",
    aliases: ['ls', '서버리스트']
  }
}

export default ServerList