import { Client, Message } from "discord.js";
import { Map } from 'immutable'
import { Ping, Uptime } from './cmd'
import CE from "./cmd/CE";

type cmdFuncType = (client: Client, msg: Message, args?: string[]) => void

class Command {
  static cmds: Map<string, CE> = Map({})

  static init() {
    Command.cmds = Command.cmds.set('ping', new Ping())
    Command.cmds = Command.cmds.set('uptime', new Uptime())
  }

  static execute(command: string, client: Client, msg: Message, args?: string[]): void {
    const cmdExe = Command.cmds.get(command)

    if (cmdExe) {
      cmdExe.command(client, msg, args)
    } else
      return
  }
}

export default Command