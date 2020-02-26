import { Message } from "discord.js"

class Admin {
  static readonly admins = ['352755226224361482']

  static isAdmin(id: string): boolean {
    return this.admins.includes(id)
  }

  static reject(msg: Message) {
    msg.channel.send('관리자 전용 기능입니다.')
  }
}

export default Admin
