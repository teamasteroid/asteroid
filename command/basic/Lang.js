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

  run (client, msg, args, cmd, lang) {
    if(args.length < 1) {
      LangMng.getLang(msg).then(lang => {
        msg.channel.send(new Embed().setTitle(lang))
      })
    } else {
      if(!LangMng.checkLang(args[0])) {
        msg.channel.send(new Embed('error').setTitle(lang.command.lang.invalid))
        return
      } else {
        LangMng.setLang(msg, args[0]).then(rows => {
          LangMng.getLang(msg).then(lang => {
            const embed = new Embed()
              .setTitle(LangMng.getLangs()[lang].command.lang.changed)
            msg.channel.send(embed)
          })
        })
      }
    }
  }
}

module.exports = Lang
