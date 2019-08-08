import CE from "../../CE";
import { Client, Message, RichEmbed, User } from "discord.js";
import DB from "../lib/DB";
import Logger from "../../../../Logger";

class Info extends CE {
  command(client: Client, msg: Message, args: string[]) {
    const users = msg.mentions.users

    if(!(users.array().length > 0)) {
      DB.query('SELECT * FROM user where id=?', [msg.author.id], (error, results, fields) => {
        if(error) {
          Logger.err(error.stack || error.toString())
        }
  
        if(results.length < 1) {
          const embed = new RichEmbed()
            .setTitle('실패')
            .addField('해당 유저의 정보가 없습니다', '`$tos`를 통해 약관에 동의 해 주십시오.')
        
          msg.channel.send(embed)
          return
        }
  
        const embed = new RichEmbed()
          .setTitle('STAT OF `' + msg.author.username + '`')
          .addField('소지품', results[0]['item'])
          .addField('돈', results[0]['money'])
  
        msg.channel.send(embed)
      })
      return
    }

    DB.query('SELECT * FROM user where id=?', [users.first().id], (error, results, fields) => {
      if(error) {
        Logger.err(error.stack || error.toString())
      }

      if(results.length < 1) {
        const embed = new RichEmbed()
          .setTitle('실패')
          .addField('해당 유저의 정보가 없습니다', '`$tos`를 통해 약관에 동의 해 주십시오.')
      
        msg.channel.send(embed)
        return
      }

      const embed = new RichEmbed()
        .setTitle('STAT OF `' + users.first().username + '`')
        .addField('소지품', results[0]['item'])
        .addField('돈', results[0]['money'])

      msg.channel.send(embed)
    })
  }

  desc = {
    name: 'info',
    description: "@mention된 유저의 정보를 봅니다.",
    aliases: ["정보", "stats", "스탯", "stat"]
  }
}

export default Info