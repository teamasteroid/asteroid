import { Client, Message } from 'discord.js'
import Command from '../Command'
import CommandMeta from '../CommandMeta'
import Embed from '../Embed'
import Database from '../../database/Database'
import UserManager from '../../database/UserManager'

class Black extends Command {
  constructor() {
    const meta: CommandMeta = {
      name: 'black',
      description: '유저를 정지합니다.',
      alias: ['밴', '블랙', '정지', '블랙리스트'],
      category: 'basic',
      isAdminOnly: true,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    if (args.length < 1) {
      const embed = new Embed()
        .setTitle('사용법')
        .setDescription('black <`@mention`>')

      msg.channel.send(embed)
      return
    }

    let user = msg.mentions.users.first()

    if(!user) {
      if (msg.guild) {
        client.users.fetch(args[0]).then(idUser => {
          if(idUser) {
            user = idUser
            return true
          } else {
            return false
          }
        })
      }
    }

    if(!user) {
      const embed = new Embed('err')
        .setTitle('실패')
        .setDescription('해당 유저를 찾을 수 없습니다.')
      
      msg.channel.send(embed)
      return
    }

    let reason: string | null = null

    if(args.length > 1) {
      const cl = msg.content.split(' ')[0].length
      const al = msg.content.split(' ')[1].length

      reason = msg.content.slice(cl + al + 1).trim()
    }

    if(!reason) reason = 'No reason given'

    const db = new Database(msg)

    db.query('SELECT * FROM user WHERE discord=?', [user.id])
      .then((rows) => {
        if(rows && rows instanceof Array) {
          if(rows.length < 1) {
            UserManager.createNewUser(msg)

            const embed = new Embed('warn')
              .setTitle('유저정보를 추가했습니다.')

            msg.channel.send(embed)

            return null
          } else {
            return rows[0].id
          }
        } else {
          const embed = new Embed('err')
            .setTitle('데이터베이스 오류')
            .setDescription('rows가 배열이 아닙니다.')
          
          msg.channel.send(embed)
          return null
        }
      }).then(id => {
        if(!id) {
          const embed = new Embed('err')
            .setTitle('해당유저를 찾을 수 없습니다.')
          
          msg.channel.send(embed)
        } else {
          db.query(
            'INSERT INTO black (discord, uuid, reason) VALUES (?, ?, ?)',
            [user!.id, id, reason]
          ).then(rows => {
            const embed = new Embed()
              .setTitle('black')
              .addField('id', user!.id, true)
              .addField('uuid', id, true)
              .addField('reason', reason, true)

            msg.channel.send(embed)

            db.close()
          })
        }
      })
  }
}

export default Black
