import * as host from './config.js'
import { get, post,getAmount ,deleteBank} from './fetch'

export const REST = {
  queryLowerLevel(pageNo,pageSize) {
    return get(host.queryLowerLevel+'?pageNo='+pageNo+'&pageSize='+pageSize)
  },
};
