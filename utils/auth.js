import Cookies from 'js-cookie'

//key: 公用的key
const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const AvatarKey = 'User-Avatar'

//设置cookies内容
export function setUser(token, name, avatar) {
    Cookies.set(TokenKey, token)
    Cookies.set(NameKey, name)
    Cookies.set(AvatarKey, avatar)
}

//获取cookies内容
export function getUser(){
    return {
        token: Cookies.get(TokenKey),
        name: Cookies.get(NameKey),
        avatar: Cookies.get(AvatarKey)
    }
}

//删除cookies内容
export function removeUser(){
    Cookies.remove(TokenKey)
    Cookies.remove(NameKey)
    Cookies.remove(AvatarKey)
}