import express, { Application, Router, static as ss } from "express";
import { success } from "../SLog";
import { Portal } from './routes'

class Web {
  static app: Application
  static router: Router

  static start(): void {
    Web.app = express()
    Web.router = Router()

    Web.app.set('port', process.env.port || 80)
    Web.app.set('views', __dirname + '/public/views')
    Web.app.set('view engine', 'pug')

    Web.router.route('/').get(Portal.join)

    Web.app.use('/', ss(__dirname + '/public'))
    Web.app.use(Web.router)

    Web.app.listen(Web.app.get('port'), () => {
      success(`Express server is online on port ${Web.app.get('port')}`)
    })
  }
}

export default Web