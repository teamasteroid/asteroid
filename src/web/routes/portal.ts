import { Request, Response } from "express";
import { info, err as es } from "../../SLog";
import Bot from '../../bot/bot'

class Portal {
  static join(req: Request, res: Response) {
    info(req.ip + ' : portal')

    const context = {
      servers: Bot.getServers(),
      users: Bot.getUsers()
    }

    req.app.render('portal', context, (err: Error, html: string) => {
      if(err) {
        es(err.stack || err.toString())
        return
      }

      res.end(html)
    })
  }
}

export default Portal