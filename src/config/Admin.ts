import { Message } from "discord.js"
import Embed from "../commands/Embed"

class Admin {
  static readonly admins = ['352755226224361482']

  static isAdmin(id: string): boolean {
    return this.admins.includes(id)
  }

  static reject(msg: Message) {
    const embed = new Embed('error')
      .setTitle('관리자 전용 기능입니다.')
    msg.channel.send(embed)
  }
}

export default Admin
