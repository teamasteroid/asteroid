const Command = require('../Command')
const LangMng = require('../../lang/Language')
const Embed = require('../../utils/embed')

class Lang extends Command {
  constructor () {
    const info = {
      name: 'lang',
      aliases: ['language', '언어'],
      description: '자신의 언어를 변경합니다.',
      isAdminOnly: false
    }

    super(info)
  }

  run (client, msg, args, cmd) {
    if(args.length < 1) {
      LangMng.getLang(msg).then(lang => {
        msg.channel.send(new Embed().setTitle(lang))
      })
    } else {
      if(!LangMng.checkLang(args[0])) {
        msg.channel.send(new Embed('error').setTitle('유효하지 않은 언어입니다.'))
        return
      } else {
        LangMng.setLang(msg, args[0]).then(rows => {
          msg.channel.send(new Embed().setTitle('언어가 변경되었습니다.'))
        })
      }
    }
  }
}

module.exports = Lang
