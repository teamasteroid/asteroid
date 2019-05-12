import express, { Application, Router, static as ss, Response, Request } from "express";
import { info, success } from "../SLog";

class Web {
  static app: Application
  static router: Router

  static start(): void {
    Web.app = express()
    Web.router = Router()

    Web.app.set('port', 80)
    Web.app.set('views', __dirname + '/public/views')
    Web.app.set('view engine', 'pug')

    Web.router.route('/').get((req: Request, res: Response) => {
      info(req.ip + ' : portal')
      
      res.end('<h1>Hello World!</h1>')
    })

    Web.app.use('/', ss(__dirname + '/public'))
    Web.app.use(Web.router)

    Web.app.listen(Web.app.get('port'), () => {
      success(`Express server is online on port ${Web.app.get('port')}`)
    })
  }
}

export default Web