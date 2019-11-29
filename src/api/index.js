import * as host from './config.js'
import { get, post,getAmount ,deleteBank} from './fetch'

export const REST = {
  getCarouselList(l) {
    return get(host.getCarouselList+"getBanner/S"+"?language="+l+"&bannerExchange=S&exchange=WCT")
  },
};
