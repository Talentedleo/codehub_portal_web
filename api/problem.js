import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'problem'

export default {
  // /qa/problem/hotlist/{label}/{page}/{size}
  // /qa/problem/newlist/{label}/{page}/{size}
  // /qa/problem/waitlist/{label}/{page}/{size}
  getList(type,label,page,size) {
    return request({
      url: `/${group_name}/${api_name}/${type}/${label}/${page}/${size}`,
      method: 'get'
    })
  }
}
