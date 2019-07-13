import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";
import DB from "../lib/DB";
import { err } from '../../../../Logger'

class AgreeTos extends CE {
  command(client: Client, msg: Message, args: string[]) {
    DB.query(`SELECT * from user where id=?`, [msg.author.id], (error, results, fields) => {
      let result: boolean
      if(error) {
        const embed = new RichEmbed()
          .setTitle('에러 발생')
          .setColor('#f22')
          .setDescription(`Starlight#7528 으로 연락 바랍니다.`)

          msg.channel.send(embed)

        err(error.stack || error.toString())
        result = false
        return
      }
      if(results.length > 0) result = true
      else result = false

      if(result) {
        const embed = new RichEmbed()
        .setTitle('실패')
        .addField('이미 데이터가 존재합니다', '삭제를 원하시면 Starlight#7528 으로 연락하시기 바랍니다.')

        msg.channel.send(embed)
        return
      }

      DB.query(`INSERT INTO user VALUES (?, '{}', ?)`, [msg.author.id, 0], (error, results, fields) => {
        if(error) {
          const embed = new RichEmbed()
            .setTitle('에러 발생')
            .setColor('#f22')
            .setDescription(`Starlight#7528 으로 연락 바랍니다.`)

            msg.channel.send(embed)

          err(error.stack || error.toString())
          return
        }

        const embed = new RichEmbed()
        .setTitle('약관 동의')
        .setColor('#7f7')
        .setDescription('정상적으로 처리되었습니다.')

        msg.channel.send(embed)
      })
    })
  }

  async isAgreed(id: string, msg: Message): Promise<boolean> {
    let result: boolean = false
    await DB.query(`SELECT * from user where id=?`, [id], (error, results, fields) => {
      if(error) {
        const embed = new RichEmbed()
          .setTitle('에러 발생')
          .setColor('#f22')
          .setDescription(`Starlight#7528 으로 연락 바랍니다.`)

          msg.channel.send(embed)

        err(error.stack || error.toString())
        result = false
        return
      }
      if(results.length > 0) result = true
      else result = false
    })

    return result
  }
  
  desc = {
    name: 'agreetos',
    description: '이용약관에 동의합니다.',
    aliases: ['약관동의', '토스동의', '동의', '이용약관동의']
  }
}

export default AgreeTos