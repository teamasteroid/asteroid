import express, { Application, Router, static as ss } from "express";
import { success } from "../SLog";
import { Portal } from './routes'
import { oauth } from '../config/const.json'
import { Strategy } from 'passport-discord'
import passport from 'passport'
import session from 'express-session'

class Web {
  static app: Application
  static router: Router

  static start(): void {
    Web.app = express()
    Web.router = Router()

    Web.app.set('port', process.env.port || 80)
    Web.app.set('views', __dirname + '/public/views')
    Web.app.set('view engine', 'pug')

    // const CLIENT_ID = oauth.CLIENT_ID
    const CLIENT_SECRET = oauth.CLIENT_SECRET
    // const REDIRECT = "http://5tarlight.kro.kr/oauth/callback/discord"

    // const scopes = ['identify']

    // passport.serializeUser(function(user, done) {
    //   done(null, user);
    // });
    // passport.deserializeUser(function(obj, done) {
    //   done(null, obj);
    // });

    // passport.use(new Strategy({
    //   clientID: CLIENT_ID,
    //   clientSecret: CLIENT_SECRET,
    //   callbackURL: REDIRECT,
    //   scope: scopes
    // },
    // (accessToken, refreshToken, profile, cb) => {
    //   process.nextTick(() => cb(null, profile))
    // }))

    Web.app.use(session({
      secret: CLIENT_SECRET,
      resave: true,
      saveUninitialized: false
    }))
    
    // Web.app.use(passport.initialize())
    // Web.app.use(passport.session())  
    
    // Web.router.route('/login').get(passport.authenticate('discord', { scope: scopes }), function(req, res) {})
    // Web.router.route('/oauth/callback/discord').get(passport.authenticate('discord', { failureRedirect: '/login' }), (req, res) => { res.redirect('/') })
    // Web.router.route('/logout').get((req, res) => {
    //   req.logout()
    //   res.redirect('/')
    // })
  
    
    Web.router.route('/').get(Portal.join)
    Web.app.use('/', ss(__dirname + '/public'))
    Web.app.use(Web.router)

    Web.app.listen(Web.app.get('port'), () => {
      success(`Express server is online on port ${Web.app.get('port')}`)
    })
  }
}

export default Web