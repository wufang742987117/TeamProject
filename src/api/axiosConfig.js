import "babel-polyfill";
import { Message } from 'element-ui';
import axios from 'axios'
import qs from 'qs'
// import { GET } from "common/js/user"
import vue from '@/main'
// import { get_userInfo } from "common/js/user"
import store from 'store'

// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.common['Authorization'] = ''
// axios.defaults.headers.token = get_userInfo('resultSet')
// POST传参序列化

axios.interceptors.request.use(config => {

  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  // if (sessionStorage.getItem('__HXHY_MANAGER_TOKEN__')) {
  //
  //   config.headers.common['token'] = sessionStorage.getItem('__HXHY_MANAGER_TOKEN__');
  // }
  return config;
}, error => {
  Message.error('错误的传参')
  return Promise.reject(error);
});

//返回状态判断
// axios.interceptors.response.use(res => {
//   debugger;
//   if (res.data.status.success ==1) {
//     return res.data;
//   } else {
//     // Message.error(res.data.msg)
//     return Promise.reject(res.data);
//   }
// }, error => {
//   Message.error('网络异常')
//   // return Promise.reject(error);
// });

axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://47.96.116.58:12539';



