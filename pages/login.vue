<template>
<div class="wrapper loginsign"> 
   <div class="item signup"> 
    <div class="form"> 
     <h3 class="loginsign-title">注册新账号</h3> 
     <form class="sui-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">名字</label> 
       <div class="controls"> 
        <input type="text" id="inputname" placeholder="真实姓名或常用昵称" class="input-xlarge" v-model="pojo.nickname"/> 
       </div> 
      </div> 
      <div class="different"> 
       <div class="radio-content"> 
        <div id="a1" class="phone"> 
         <div class="control-group number"> 
          <input type="text" placeholder="仅支持大陆手机号" class="input-xlarge" v-model="pojo.mobile"/> 
         </div> 
         <div class="control-group code"> 
          <div class="input-append"> 
           <input id="appendedInputButton" type="text" placeholder="短信验证" class="span2 input-large msg-input" v-model="code"/> 
           <button type="button" class="sui-btn msg-btn" @click="sendsms">获取验证码</button> 
          </div> 
         </div> 
         <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码</label> 
          <div class="controls"> 
           <input type="text" id="inputpassword" placeholder="请输入6-16位密码" class="input-xlarge" v-model="pojo.password"/> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
      <div class="control-group btn-signup"> 
       <label class="control-label"></label> 
       <div class="controls"> 
        <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
        <button type="button" class="sui-btn btn-danger btn-yes" @click="register">注 册</button> 
       </div> 
      </div> 
     </form> 
    </div> 
   </div> 
   <div class="item"> 
    <div class="form"> 
     <h3 class="loginsign-title">用户登录</h3> 
     <form class="sui-form login-form"> 
      <div class="control-group"> 
       <label for="inputname" class="control-label">手机号：</label> 
       <div class="controls"> 
        <input type="text" id="inputname" placeholder="11位手机号" class="input-xlarge" data-rules="required" v-model="mobile"/> 
       </div> 
      </div> 
      <div class="control-group"> 
       <label for="inputpassword" class="control-label">密码：</label> 
       <div class="controls"> 
        <input type="text" id="inputpassword" placeholder="输入登录密码" class="input-xlarge" v-model="password"/> 
       </div> 
      </div> 
      <div class="controls"> 
       <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label> 
       <button type="button" class="sui-btn btn-danger btn-yes" @click="login">登 录</button> 
        <button type="button" class="sui-btn btn-danger btn-yes" @click="weixinQRCode">二维码</button> 
      </div> 
      <div id="weixin" class="other-methods"> 
      </div> 
     </form> 
    </div> 
   </div> 
  </div>
</template>

<script>
import '~/assets/css/page-sj-person-loginsign.css'

import userApi from '@/api/user'
import {setUser} from '@/utils/auth'
export default {
  //浏览器的参数
  data(){
    return {
      pojo: {},  //绑定的实体对象(带手机号)
      code: '',  //手机验证码
      mobile: '',
      password: ''
    }
  },
  methods: {
    sendsms(){
      userApi.sendsms(this.pojo.mobile).then(res => {
        //alert(res.data.message)
        this.$message({
          message: res.data.message,
          type: (res.data.flag? 'success' : 'error')
        })
      })
    },
    register(){
      userApi.register(this.code, this.pojo).then(res => {
        this.$message({
          message: res.data.message,
          type: (res.data.flag? 'success' : 'error')
        })
      })      
    },
    login(){
      userApi.login(this.mobile, this.password).then(res => {
        if (res.data.flag){
          // 在跳转到首页之前,应该要把用户的信息存储起来,存在cookie中
          setUser(res.data.data.token, res.data.data.name, res.data.data.avatar)
          location.href = '/'
        }else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
        }
      })      
    },
    weixinQRCode(){
      var obj = new WxLogin({
      id: "weixin",
      appid: "wx3bdb1192c22883f3",
      scope: "snsapi_login",
      //用户扫码确认之后,微信会回调url, 在url中会带上临时票据code
      redirect_uri: "http://note.java.itcast.cn/weixinlogin"
      });
    }   
  },
  //挂载: 页面渲染完成之后,显示二维码
  mounted(){
    /** 一般二维码是隐藏的,用户点击登录才显示微信二维码
    var obj = new WxLogin({
      id: "weixin",
      appid: "wx3bdb1192c22883f3",
      scope: "snsapi_login",
      //用户扫码确认之后,微信会回调url, 在url中会带上临时票据code
      redirect_uri: "http://note.java.itcast.cn/weixinlogin"
    });
    */
  },
  head:{
    script:[
      {src:'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'}
    ]
  } 
}
</script>