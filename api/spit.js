import request from '@/utils/request'
const group_name = 'spit'
const api_name = 'spit'

export default {
  // /spit/spit/search/{page}/{size}
  search(page, size, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  // /spit/spit/{spitId}
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  // /spit/spit/commentlist/{id}
  commentlist(id){
    return request({
      url: `/${group_name}/${api_name}/commentlist/${id}`,
      method: 'get'      
    })
  },
  // /spit/spit/thumbup/{spitId}
  thumbup(id){
    return request({
      url: `/${group_name}/${api_name}/thumbup/${id}`,
      method: 'put'      
    })
  },
  // /spit/spit
  save(pojo){
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo    
    })    
  }
}
