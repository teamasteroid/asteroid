import { Client, Message } from 'discord.js'
import CommandMeta from './CommandMeta'

class Command {
  meta: CommandMeta

  constructor(_meta: CommandMeta) {
    this.meta = {
      name: 'NoName',
      description: 'NoDesc',
      alias: [],
      isAdminOnly: true,
      parameter: 0,
      category: 'NoCategory'
    }

    if(_meta) {
      this.meta.name = _meta.name || 'NoName'
      this.meta.description = _meta.description || 'NoDesc'
      this.meta.alias = _meta.alias || []
      this.meta.isAdminOnly = _meta.isAdminOnly || true
      this.meta.parameter = _meta.parameter || 0
      this.meta.category = _meta.category || 'NoCategory'
    }
  }

  execute(client: Client, msg: Message, args: string[], cmd: string) {
    msg.reply('Nothging given')
  }
}

export default Command
