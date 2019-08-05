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

  static getRegion(region: string) {
    const regions = RegionManager.getItemList()
    let result = null
    if(!regions.getIn([region.toUpperCase()])) {
      Object.keys(regions.toJS()).map(k => regions.toJS()[k]).forEach((r: any) => {
        if(r.name == region.toUpperCase().trim()) {
          result = r
        }
      })
    } else {
      result = regions.getIn([region.toUpperCase()]).toJS()
    }

    return result
  }
}

export default RegionManager