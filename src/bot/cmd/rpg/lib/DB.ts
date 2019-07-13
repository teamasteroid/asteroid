    
import { Connection, createConnection, queryCallback } from 'mysql'
import * as DBSetting from '../../../../config/const.json'
import Logger from '../../../../Logger';

class DB {
  static conn: Connection

  static init() {
    DB.conn = createConnection(DBSetting.db)
    Logger.success('DB Connection Ready')
  }

  static query(query: string, values: any, callback: queryCallback) {
    DB.conn.query(query, values, callback)
  }
}

export default DB