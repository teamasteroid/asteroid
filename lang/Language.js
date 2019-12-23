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
          Lang.newLang(msg, 'en')
          return 'en'
        }
      }).then(lang => {
        db.close()
        return lang
      })
  }

  static newLang(msg, lang) {
    const db = new Database(msg)

    return db.query('SELECT * FROM user WHERE discord=?', [msg.author.id])
      .then(rows => {
        return rows[0].id
      }).then(id => {
        return db.query('INSERT INTO lang (id, lang) VALUES (?, ?)', [id, lang])
      }).then(rows => {
        db.close()
        return rows
      })
  }

  static setLang(msg, lang) {
    const db = new Database(msg)

    return db.query('SELECT * FROM user WHERE discord=?', [msg.author.id])
      .then(rows => {
        return rows[0].id
      }).then(id => {
        return db.query('UPDATE lang SET lang=? WHERE id=?', [lang, id])
      }).then(rows => {
        db.close()
        return rows
      })
  }

  static checkLang(lang) {
    return Object.keys(langs).includes(lang.trim().toLowerCase())
  }
}

module.exports.langs = langs
module.exports = Lang