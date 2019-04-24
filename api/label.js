import request from '@/utils/request'
const group_name = 'base'
const api_name = 'label'

export default {
  // /base/label/toplist
  toplist() {
    return request({
      url: `/${group_name}/${api_name}/toplist`,
      method: 'get'
    })
  }
}
