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

    if(!regions.getIn([region.toUpperCase()])) {
      Object.keys(regions.toJS()).map(k => regions.toJS()[k]).forEach((r: any) => {
        if(r.name == region.toUpperCase().trim()) {
          return r
        }
      })

      if(!region) {
        return null
      }
    } else {
      return regions.getIn([region.toUpperCase()]).toJS()
    }
  }
}

export default RegionManager