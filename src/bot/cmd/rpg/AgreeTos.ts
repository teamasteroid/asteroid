import CE from "../CE";
import { Client, Message, RichEmbed } from "discord.js";
import DB from "./DB";

class AgreeTos extends CE {
  command(client: Client, msg: Message, args: string[]) {
    DB.query(`INSERT INTO user VALUES (?, '{}', ?)`, [msg.author.id, 0], (err, results, fields) => {
      if(err) {
        const embed = new RichEmbed()
          .setTitle('에러 발생')
          .setColor('#f22')
          .setDescription(`Starlight#7528 으로 연락 바랍니다.`)

          msg.channel.send(embed)

        console.error(err.stack || err.toString())
        return
      }

      const embed = new RichEmbed()
      .setTitle('약관 동의')
      .setColor('#7f7')
      .setDescription('정상적으로 처리되었습니다.')

      msg.channel.send(embed)
    })
  }
  
  desc = {
    name: 'agreetos',
    description: '이용약관에 동의합니다.',
    aliases: ['약관동의', '토스동의', '동의', '이용약관동의']
  }
}

export default AgreeTos