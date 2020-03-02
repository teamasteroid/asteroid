import { Message } from "discord.js";
import Database from "./Database";
import Embed from "../commands/Embed";

class UserManager {
  static isNewUser (msg: Message) {
    const db = new Database(msg)
    
    return db.query('SELECT * FROM user WHERE discord=?', [msg.author.id])
      .then((rows) => {
        if (rows && (rows as any[]).length > 0) return false
        else return true
      }).then(isNew => {
        db.close()
        return isNew
    })
  }

  static createNewUser (msg: Message) {
    const db = new Database(msg)

    return db.query('INSERT INTO user (discord) VALUES (?)', [msg.author.id])
      .then(rows => {
        const embed = new Embed()
          .setTitle('유저 데이터가 생성되었습니다.')

        msg.channel.send(embed)
        
        db.close()
        return rows
      })
  }
}

export default UserManager
