import { createConnection, Connection, MysqlError } from 'mysql'
import config from './config/config'
import Logger from './Logger'
import { Message } from 'discord.js'
import Embed from './commands/Embed'

class Database {
  dm: Message
  connection: Connection

  constructor (msg: Message) {
    this.dm = msg
    this.connection = createConnection(config.db)
  }

  query (sql: string, args: any[]) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) { return reject(err) }
        resolve(rows)
      })
    }).catch(this.error)
  }

  close () {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) { return reject(err) }
        resolve()
      })
    }).catch(this.error)
  }

  error(err: MysqlError) {
    Logger.err(err.stack || 'No Stack Given')

    const embed = new Embed('err')
      .setTitle('DB 에러')
      .setDescription('<@352755226224361482>으로 문의해 주십시오.')

    this.dm.channel.send(embed)
  }
}

export default Database
