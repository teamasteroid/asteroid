import { Client, Message, RichEmbed } from "discord.js";
import CE from "./CE";

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
}

export default ServerList