import * as regions from './region.json'
import { fromJS } from 'immutable';

class RegionManager {
  static itemList: any
  static init() {
    RegionManager.itemList = fromJS(regions)
  }

  static getItemList(): any {
    return RegionManager.itemList
  }
}

export default RegionManager