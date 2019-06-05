    
import { Connection, createConnection, queryCallback } from 'mysql'
import * as DBSetting from '../../../../config/const.json'
import { success } from '../../../../SLog';

class DB {
  static conn: Connection

  static init() {
    DB.conn = createConnection(DBSetting.db)
    success('DB Connection Ready')
  }

  static query(query: string, values: any, callback: queryCallback) {
    DB.conn.query(query, values, callback)
  }
}

export default DB