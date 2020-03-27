import { Client, Message } from 'discord.js'
import Command from '../../Command'
import CommandMeta from '../../CommandMeta'
import Embed from '../../Embed'

class UserInfo extends Command {
  constructor() {
    const meta: CommandMeta = {
      name: 'userinfo',
      description: '해당 유저의 정보를 보여줍니다..',
      alias: ['ui', '유저', '유저정보'],
      category: 'user',
      isAdminOnly: false,
      parameter: 1
    }

    super(meta)
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    
  }
}

export default UserInfo
