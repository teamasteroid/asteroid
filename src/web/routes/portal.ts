import { Request, Response } from "express";
import Bot from '../../bot/bot'
import Logger from "../../Logger";

class Portal {
  static join(req: Request, res: Response) {
    Logger.info(req.ip + ' : portal')

    const context = {
      servers: Bot.getServers(),
      users: Bot.getUsers()
    }

    req.app.render('portal', context, (err: Error, html: string) => {
      if(err) {
        Logger.err(err.stack || err.toString())
        return
      }

      res.end(html)
    })
  }
}

export default Portal