import * as items from './item.json'
import { fromJS } from 'immutable';
import { User } from 'discord.js';
import DB from './DB';
import Logger from '../../../../Logger';

class ItemManager {
  static itemList: any
  static init() {
    ItemManager.itemList = fromJS(items)
  }

  static getItemList(): any {
    return ItemManager.itemList
  }

  static async getUserItem(user: User): Promise<any> {
    let result = null
    await DB.query('SELECT * FROM user WHERE id=?', [user.id], (err, results, fields) => {
      if(err) {
        Logger.err(err.stack || err.toString())
        return null
      }

      if(results.length < 1) {
        // Not Found
        result = null
        console.dir('nope')
      } else {
        // Found
        result = JSON.parse(results[0]['item'])
      }
    })

    return result
  }
}

export default ItemManager
