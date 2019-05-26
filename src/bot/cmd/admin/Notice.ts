import CE from "../CE";
import { Client, Message, RichEmbed, Channel, TextChannel } from "discord.js";

class Notice extends CE {
  command(client: Client, msg: Message, args: string[]) {
    if(msg.author.id !== '352755226224361482') {
      const embed = new RichEmbed()
        .setTitle('Error : Permission Denied')
        .setColor('#ff3333')
      
      msg.channel.send(embed)
      return
    }

    msg.channel.send('공지 전송중...').then(m => {
      const embed = new RichEmbed()
        .setTitle('공지')
        .setDescription(msg.content.slice(msg.content.replace('\n', ' ').split(' ')[0].length, msg.content.length))
        .setFooter(`${msg.author.username} - Verified`)
        .setTimestamp(new Date())

      client.guilds.forEach(guild => {
        const gchannel = guild.channels.find(
          val => (
                    val.name.endsWith('공지')
                    || val.name.endsWith('notice')
                    || val.name.startsWith('공지')
                    || val.name.startsWith('notice')
                  ) && val instanceof TextChannel
        )
        
        if(gchannel instanceof TextChannel) {
          gchannel.send(embed)
        } else return
      })

      if(m instanceof Message) {
        m.edit('공지 작성 완료')
      } else {
        m[0].edit('공지 작성 완료')
      }
    })

  }

  desc = {
    name: 'notice',
    description: '공지를 합니다(Admin Only).',
    aliases: ['공지']
  }
}

export default Notice