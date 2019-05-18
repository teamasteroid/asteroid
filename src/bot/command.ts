import { Client, Message } from "discord.js";
import { Map } from 'immutable'
import { Ping, Uptime, ServerList } from './cmd'
import CE from "./cmd/CE";

type cmdFuncType = (client: Client, msg: Message, args?: string[]) => void

class Command {
  static cmds: Map<string, CE> = Map({})

  static init() {
    Command.set('ping', new Ping())
    Command.set('핑', new Ping())
    Command.set('uptime', new Uptime())
    Command.set('업타임', new Uptime())
    Command.set('serverlist', new ServerList())
    Command.set('sl', new ServerList())
    Command.set('서버리스트', new ServerList())
    Command.set('서버', new ServerList())
  }

  static set(cmd: string, ce: CE) {
    Command.cmds = Command.cmds.set(cmd, ce)
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