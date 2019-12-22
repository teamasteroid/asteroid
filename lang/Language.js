const Database = require('../utils/Database')

const langs = {
  ko: require('./ko.json'),
  en: require('./en.json')
}

class Lang {
  static async getLang(msg) {
    const db = await new Database(msg)

    return db.query('SELECT * FROM user WHERE discord=?', [msg.author.id])
      .then(rows => {
        return rows[0].id
      }).then(id => {
        return db.query('SELECT * FROM lang WHERE id=?', [id])
      }).then(rows => {
        if(rows.length > 0) {
          return rows[0].lang
        } else {
          Lang.setLang(msg, 'en')
          return 'en'
        }
      }).then(lang => {
        db.close()
        return lang
      })
  }

  static setLang(msg, lang) {
    const db = new Database(msg)
  }
}

module.exports.langs = langs
module.exports = Lang