import { Client, Message, RichEmbed } from 'discord.js'
import { err, success } from '../SLog';
import { bot } from '../config/const.json'
import Command from './command'
import DB from './cmd/rpg/DB';

class Bot {
  static client: Client
  static prefix: string = '$'

  static login(): void {
    Bot.client = new Client()
    Command.init()

    Bot.client.on('ready', () => {
      success(`Logged in as ${Bot.client.user.tag}`)

      setInterval(async () => {
        const statuslist = [
          `5tarlight.kro.kr:90 | ${Bot.prefix}help`,
          `${Bot.client.guilds.size} servers | ${Bot.client.users.size} users`
        ];
        const random = Math.floor(Math.random() * statuslist.length);
    
        try {
          await Bot.client.user.setPresence({
            game: {
              name: `${statuslist[random]}`,
              type: "PLAYING"
            },
            status: "online"
          });
        } catch (error) {
          err(error);
        }
      }, 15000);
    })
    
    Bot.client.on('message', (msg: Message) => {
      if(msg.channel.type == 'dm') {
        msg.channel.send(new RichEmbed()
          .setColor('#f00')
          .setTitle('에스터로이드 봇은 DM에서 작동하지 않습니다.')
          .addField('봇을 서버에 초대해 사용해 보세요.', 'https://discordapp.com/oauth2/authorize?client_id=576763498558652425&permissions=8&scope=bot')
        )
        return
      }
      if(!msg.content.startsWith(Bot.prefix)) return

      const arg = msg.content.slice(Bot.prefix.length, msg.content.length).split(' ')
      const cmd = arg[0]
      const args = arg.slice(1, arg.length)

      Command.execute(cmd, Bot.client, msg, args)
    
    })
    DB.init()
    Bot.client.login(bot.token)
  }

  static getServers(): number {
    return Bot.client.guilds.size
  }

  static getUsers(): number {
    return Bot.client.users.size
  }
}

export default Bot