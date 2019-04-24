import request from '@/utils/request'
import axios from 'axios'

export default {
    getAccessToken(code){
        return axios.get(`http://localhost:8888?code=${code}&operation=token`)
    },
    getUserInfo(token, openid){
        return axios.get(`http://localhost:8888?access_token=${token}&openid=${openid}&operation=userinfo`)
    }
}