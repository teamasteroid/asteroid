import * as items from './item.json'
import { fromJS } from 'immutable';
import { User } from 'discord.js';
import DB from './DB';
import Logger from '../../../../Logger.js';

class ItemManager {
  static itemList: any
  static init() {
    ItemManager.itemList = fromJS(items)
  }

  static getItemList(): any {
    return ItemManager.itemList
  }

  static getUserItem(user: User): any {
    DB.query('SELECT * FROM user WHERE id=?', [user.id], (err, results, fields) => {
      if(err) {
        Logger.err(err.stack || err.toString())
        return null
      }

      if(results.length < 1) {
        // Not Found
        return null
      } else {
        // Found
        return JSON.parse(results[0]['item'])
      }
    })
  }
}

export default ItemManager
