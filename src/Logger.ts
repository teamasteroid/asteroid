import 'colors'
import { writeFileSync } from 'fs'
import { join } from 'path';

class Logger {
  static send(text: string, raw: string): void {
    const date: Date = new Date();
    const o = [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    ]
    let t: string[] = []
    for (let i in o) {
      if (o[i] < 10) t[i] = "0" + o[i];
      else t[i] = o[i].toString();
    }
    const file = `${t[0]}_${t[1]}_${t[2]}.log`
    const root = join(__dirname, `/log/${file}`)
    console.log(`[${t[0]}-${t[1]}-${t[2]} ${t[3]}:${t[4]}:${t[5]}] ${text}`)
    writeFileSync(root, `[${t[0]}-${t[1]}-${t[2]} ${t[3]}:${t[4]}:${t[5]}] ${raw}\n`, {flag: 'a', encoding: 'utf8'})
  }

  static info(text: string): void {
    Logger.send('[info] ' + text, '[info] ' + text)
  }

  static warn(text: string): void {
    Logger.send('[warn] '.black.bgYellow + text, '[warn] ' + text)
  }

  static success(text: string): void {
    Logger.send('[success] '.green + text, '[success] ' + text)
  }

  static err(text: string): void {
    Logger.send('[warn] '.bgRed + text, '[warn] ' + text)
  }
}

export default Logger