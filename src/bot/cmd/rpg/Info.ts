import CE from "../CE";
import { Client, Message, RichEmbed } from "discord.js";
import DB from "./DB";
import { err } from "../../../SLog";

class Info extends CE {
  command(client: Client, msg: Message, args: string[]) {
    const users = msg.mentions.users

    if(!(users.array().length > 0)) {
      const embed = new RichEmbed()
        .setTitle('실패')
        .addField('해당 유저의 정보가 없습니다', '`$tos`를 통해 약관에 동의 해 주십시오.')
      
      msg.channel.send(embed)
      return
    }

    DB.query('SELECT * FROM user where id=?', [users.first().id], (error, results, fields) => {
      if(error) {
        err(error.stack || error.toString())
      }

      if(results.length <= 0) {
        const embed = new RichEmbed()
          .setTitle('실패')
          .addField('해당 유저의 정보가 없습니다', '`$tos`를 통해 약관에 동의 해 주십시오.')
      
        msg.channel.send(embed)
        return
      }

      /**
       * @todo 유저데이터 출력
       * @body DB에서 유저데이터를 받아서 embed로 출력
       */
    })
  }
}

export default Info