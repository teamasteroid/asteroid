import { Client, Message } from "discord.js";
import { Map } from 'immutable'
import { Ping, Uptime, ServerList, Help, Tos, AT, Info, Notice, II } from './cmd'
import CE from "./cmd/CE";
import { info } from "../SLog";
import RegionInfo from "./cmd/rpg/explorer/RegionInfo";

interface cmdType {
  assential: CE[],
  admin: CE[],
  rpg: CE[]
}

class Command {
  static cmds: Map<string, CE> = Map({})

  static assential: CE[] = [
    new Ping(),
    new Uptime(),
    new ServerList(),
    new Help(),
  ]

  static admin: CE[] = [
    new Notice()
  ]
  static rpg: CE[] = [
    new Tos(),
    new AT(),
    new Info(),
    new II(),
    new RegionInfo()
  ]
  static init() {

    Command.assential.concat(Command.admin, Command.rpg).forEach(ce => {
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

  static getCes(): cmdType {
    return {
      assential: Command.assential,
      admin: Command.admin,
      rpg: Command.rpg
    }
  }
}

export default Command