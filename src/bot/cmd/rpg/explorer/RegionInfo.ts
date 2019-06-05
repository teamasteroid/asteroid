import CE from "../../CE";
import { Client, Message } from "discord.js";

class RegionInfo extends CE {
  command(client: Client, msg: Message, args: string[]) {

  }

  desc = {
    name: "regioninfo",
    description: "해당 지역의 정보를 봅니다.",
    aliases: ["ri", '지역정보', 'region', '지역']
  }
}

export default RegionInfo