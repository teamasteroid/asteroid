const Command = require('../Command')
const LangMng = require('../../lang/Language')

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
        msg.reply(lang)
      })
    } else {
      if(!LangMng.checkLang(args[0])) {
        msg.channel.send('유효하지 않은 언어')
        return
      } else {
        LangMng.setLang(args[0])
      }
    }
  }
}

module.exports = Lang
