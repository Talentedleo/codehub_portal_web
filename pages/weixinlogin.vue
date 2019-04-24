<template>
    <div>
		
    </div>
</template>

<script>
import {getUrlParam} from '@/utils/param'
//import axios from 'axios'
import weixinApi from '@/api/weixin'
import {setUser} from '@/utils/auth'

export default {
    mounted () {
        // 获取url地址上的code数据
        const code = getUrlParam('code')
        //console.log('返回微信获取的临时票据: ' + code)
        //通过code获取access_token
        /** 微信接口不支持跨域: java里面我们http-client来调用 
        const appid = 'wx3bdb1192c22883f3'
        const secret= 'db9d6b88821df403e5ff11742e799105'
        axios.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${code}&grant_type=authorization_code`).then(res => {
            console.log("获取Access_Token: " + JSON.stringify(res))
        })
        */

        //我们使用node.js来实现: node.js有服务,这个服务就是获取access_token
        //同时也可以把secret隐藏起来,因为是服务端运行
        //nodejs获取acctoken: http://localhost:8888?code=code&operation=access_token
        /** 
        axios.get(`http://localhost:8888?code=${code}&operation=token`).then(res => {
            console.log("获取Access_Token: " + JSON.stringify(res))
        })
        */
        //优化代码
        weixinApi.getAccessToken(code).then(res => {
            //console.log("获取Access_Token(优化后): " + JSON.stringify(res.data.access_token))
            //拿到access_token之后就可以去获取用户的头像和昵称  http://localhost:8888?access_token=access_token&operation=userinfo
            const token = res.data.access_token
            weixinApi.getUserInfo(token, res.data.openid).then(res2 => {
                //获取用户信息: 用户头像和昵称,但是没有手机号码
                console.log("=============用户信息获取如下====================")
                console.log(res2)
                //拿到用户信息之后,存储到cookies中,然后跳转到首页
                //参数是token, 昵称, 头像url
                setUser(token, res2.data.nickname, res2.data.headimgurl)
                //跳转到首页
                location.href = '/'
            })
        })

       

    }
}
</script>