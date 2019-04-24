import request from '@/utils/request'
const group_name = 'recruit'
const api_name = 'recruit'
export default {
  getList() {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'get'
    })
  },
  search(page, size, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    if (id === null || id === '') {
      return this.save(pojo)
    }
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'delete'
    })
  },
  // /recruit/recruit/search/recommend
  // 推荐职位
  recommend(){
    return request({
      url: `/${group_name}/${api_name}/search/recommend`,
      method: 'get'
    })    
  },
  // /recruit/recruit/search/newlist
  // 最新职位
  newlist(){
    return request({
      url: `/${group_name}/${api_name}/search/newlist`,
      method: 'get'
    })    
  }
}
