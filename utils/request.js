import axios from 'axios'
import {getUser} from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  //baseURL: 'http://192.168.12.19:7300/mock/5c0fccff21b9fe089205875a/tensquare', // api的base_url
  //baseURL: 'http://127.0.0.1:9012', 
  baseURL: 'http://www.grandleo.cn:9012', 
  timeout: 15000, // 请求超时时间
  //在头信息中加入token, 后台接收到token就可以验证身份了
  headers: {"Authorization" : "Bearer " + getUser().token}
})

export default service