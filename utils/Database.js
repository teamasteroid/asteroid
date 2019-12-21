const { createConnection } = require('mysql')
const Core = require('../data/core.json')
const Logger = require('korean-logger')

class Database {
  constructor (msg) {
    this.dm = msg
    this.connection = createConnection(Core.db)
  }

  query (sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) { return reject(err) }
        resolve(rows)
      })
    }).catch(err => {
      Logger.error(err.stack)
      this.dm.channel.send('데이터베이스 에러 <@352755226224361482>으로 문의해 주십시오.')
    })
  }

  close () {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) { return reject(err) }
        resolve()
      })
    }).catch(err => {
      Logger.error(err.stack)
      this.dm.channel.send('데이터베이스 에러 <@352755226224361482>으로 문의해 주십시오.')
    })
  }
}

module.exports = Database
