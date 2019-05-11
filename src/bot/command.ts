import { Client, Message } from "discord.js";
import { Map } from 'immutable'
import { Ping } from './cmd'

type cmdFuncType = (client: Client, msg: Message, args?: string[]) => void

class Command {
  static cmds: Map<string, cmdFuncType> = Map({})

  static init() {
    Command.cmds = Command.cmds.set('ping', Ping.ping)
  }

  static execute(command: string, client: Client, msg: Message, args?: string[]): void {
    const cmdExe = Command.cmds.get(command)

    if (cmdExe) {
      cmdExe(client, msg, args)
    } else
      return
  }
}

export default Command