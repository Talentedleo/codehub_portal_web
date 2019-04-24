import request from '@/utils/request'
const group_name = 'user'
const api_name = 'user'

export default {
  // /user/user/sendsms/{mobile}
  sendsms(mobile) {
    return request({
      url: `/${group_name}/${api_name}/sendsms/${mobile}`,
      method: 'post'
    })
  },
  // /user/user/register/{code}
  register(code, pojo) {
    return request({
      url: `/${group_name}/${api_name}/register/${code}`,
      method: 'post',
      data: pojo
    })
  },
  // /user/user/login
  login(mobile, password) {
    return request({
      url: `/${group_name}/${api_name}/login`,
      method: 'post',
      data: {
        mobile,
        password
      }
    }) 
  }    
}
