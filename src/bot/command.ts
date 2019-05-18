import { Client, Message } from "discord.js";
import { Map } from 'immutable'
import { Ping, Uptime, ServerList } from './cmd'
import CE from "./cmd/CE";
import { info } from "../SLog";

type cmdFuncType = (client: Client, msg: Message, args?: string[]) => void

class Command {
  static cmds: Map<string, CE> = Map({})

  static init() {
    const ces: CE[] = [
      new Ping(),
      new Uptime(),
      new ServerList()
    ]

    ces.forEach(ce => {
      Command.set(ce.desc.name, ce)

      const aliases = ce.desc.aliases
      aliases.forEach(alias => {
        Command.set(alias, ce)
      })
    })
  }

  static set(cmd: string, ce: CE) {
    Command.cmds = Command.cmds.set(cmd, ce)
  }

  static execute(command: string, client: Client, msg: Message, args?: string[]): void {
    const cmdExe = Command.cmds.get(command)

    if (cmdExe) {
      info(msg.author.id + ' : ' + command)
      cmdExe.command(client, msg, args)
    } else
      return
  }
}

export default Command