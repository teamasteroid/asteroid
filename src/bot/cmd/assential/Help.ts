import { Client, Message, RichEmbed } from "discord.js";
import CE from "../CE";
import Command from '../../command'

class Help extends CE {
  command(client: Client, msg: Message, args?: string[]): void {
    const { assential, admin, rpg } = Command.getCes()
    
    if(!args || (args && args.length < 1)) {
      const embed = new RichEmbed()
      .setTitle('사용법')
      .addField(`$도움 기본`, `기본 명령어들의 도움을 봅니다.`)
      .addField(`$도움 관리`, `관리자 명령어의 도움을 봅니다.`)
      .addField(`$도움 게임`, `에스터로이드 게임 관련 명령어를 봅니다`)
      .setTimestamp(new Date())
      
      msg.channel.send(embed)
      return
    }

    switch(args[0].toLowerCase()) {
      case "assential":
      case "기본":
      case "default":
      case "디폴트":
        this.gen(msg, assential)
        break
      case "admin":
      case "어드민":
      case "관리":
        this.gen(msg, admin)
        break
      case "rpg":
      case "게임":
      case "asteroid":
      case "에스터로이드":
        this.gen(msg, rpg)
        break
      default:
        msg.channel.send(new RichEmbed()
          .setTitle('오류')
          .setDescription('해당 도움말을 찾을 수 없습니다.'))
        break
    }
  }

  gen(msg:Message, ces: CE[]): void {
    let embed = new RichEmbed()
      .setTitle('도움말')

    ces.forEach((ce, i) => {
      if(i >= 20) {
        msg.channel.send(embed)
        embed = new RichEmbed()
          .setTitle('도움말 (연결)')
      }

      embed.addField(ce.desc.name, ce.desc.description, true)
    })

    msg.channel.send(embed)
  }

  desc = {
    name: "help",
    description: "도움말을 보여줍니다.",
    aliases: ['도움', '도움말', '헬프']
  }
}

export default Help
