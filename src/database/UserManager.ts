import { Message } from "discord.js";
import Database from "./Database";

class UserManager {
  static isNewUser(msg: Message) {
    const db = new Database(msg)
    
    return db.query('SELECT * FROM user WHERE id=?', [msg.author.id])
      .then((rows) => {
        if (rows instanceof Array && rows.length > 0) return false
        else return true
      }).then(isNew => {
        db.close()
        return isNew
    })
  }
}

export default UserManager