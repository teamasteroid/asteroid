import CE from "../../CE";
import { Client, Message, RichEmbed } from "discord.js";

class Tos extends CE {
  command(client: Client, msg: Message, args: string[]) {
    const tos = `에스터로이드 이용약관
  1. 본 봇을 이용하는 모든 유저는 이 약관에 동의했다고 간주한다.
  2. 이 봇의 관리자는 게임 데이터 처리를 위해 사용자의 디스코드 id 를 수집한다.
  3. 유저가 탈퇴를 요청할시 관리자는 데이터를 완전 삭제한다.
  4. 이 봇을 이용한 사기 등의 행위는 관리자에 의해 계정이 삭제되거나 차단될 수 있다.

최초 작성일 [2019.05.22]
마지막 수정일 [2019.05.22]`

    const embed = new RichEmbed()
      .setTitle('Asteroid Terms of Service')
      .addField(tos, '봇을 이용하려면 약관에 동의해야 합니다.')
      .setDescription('`$동의`명령을 통해 약관에 동의 하실 수 있습니다.')
    
    msg.channel.send(embed)
  }

  desc = {
    name: 'tos',
    description: "이용약관을 보여줍니다.",
    aliases: ["약관", "이용약관", "규정", "이용규정", "방침", "개인정보처리방침"]
  }
}

export default Tos