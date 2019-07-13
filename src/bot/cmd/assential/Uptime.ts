import { Client, Message, RichEmbed } from "discord.js";
import CE from "../CE";

export interface uptimeValue {
  d: number,
  h: number, 
  m: number, 
  s: number
}

class Uptime extends CE {
  convert(ms: number): uptimeValue {
    let d: number, h: number, m: number, s: number;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    
    return {
        d: d,
        h: h,
        m: m,
        s: s
    };
  }

  command(client: Client, msg: Message, args?: string[]): void {
    let {d, h, m, s} = this.convert(client.uptime)

    let uptime: string = `${d}일 ${h}시간 ${m}분 ${s}초`

    msg.channel.send(new RichEmbed()
      .setTitle('업타임')
      .addField(uptime, '봇이 가동된 시간입니다.'))
  }

  desc = {
    name: "uptime",
    description: "봇이 가동된 시간을 보여 줍니다.",
    aliases: ['업타임', 'ut']
  }
}

export default Uptime