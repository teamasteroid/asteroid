const Database = require('./Database')

class CheckData {
  static hasData(msg) {
    const db = new Database(msg)
    let result = false

    db.query('SELECT * FROM user WHERE id=?', [msg.author.id])
    .then(rows => {
      if(rows.length > 0) result = true
    })

    db.close()

    return result
  }
}

module.exports = CheckData