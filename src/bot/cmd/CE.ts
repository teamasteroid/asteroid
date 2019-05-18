import { Client, Message } from "discord.js";

//Command Executor
class CE {
  command(client: Client, msg: Message, args?: string[]): void {}
  desc = {
    name: "No Name",
    description: "No desc",
    aliases: ['nothing']
  }
}

export default CE