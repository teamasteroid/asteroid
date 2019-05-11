import { Client, Message } from "discord.js";
import { info } from "../../SLog";

class Ping {
  static ping(client: Client, msg: Message, args?: string[]): void {
    msg.channel.send(`**${client.ping}** ms`)

    info(msg.author.id + ' : ping')
  }
}

export default Ping