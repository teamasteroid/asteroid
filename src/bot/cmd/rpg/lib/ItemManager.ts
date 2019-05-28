import * as items from './item.json'
import { fromJS } from 'immutable';

class ItemManager {
  static itemList: any
  static init() {
    ItemManager.itemList = fromJS(items)
  }

  static getItemList(): any {
    return ItemManager.itemList
  }
}

export default ItemManager