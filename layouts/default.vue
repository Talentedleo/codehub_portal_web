<template>
  <div>
    <!-- <header>
      码农CodeHub社交平台 &nbsp;
      <router-link to="/">首页</router-link> |
      <router-link to="/recruit">招聘</router-link> |
      <router-link to="/gathering">活动</router-link> 
    </header> -->

    <!--引用组件--> 
    <!--头部导航--> 
    <div>
      <header class="wrapper"> 
        <div class="sui-navbar"> 
        <div class="navbar-inner"> 
          <a href="index-logined.html" class="sui-brand"><img src="~/assets/img/asset-logo-black.png" alt="社交" /></a> 
          <ul class="sui-nav">
          <!-- tag是样式,activeClass当前页高亮显示,exact排除/路径,就是取到其他页,头条就不会高亮了 -->
          <router-link to="/" tag="li" activeClass="active" exact><a>头条</a></router-link>
          <router-link to="/qa" tag="li" activeClass="active"><a>问答</a></router-link>
          <router-link to="/gathering" tag="li" activeClass="active"><a>活动</a></router-link>
          <router-link to="/friends" tag="li" activeClass="active"><a>交友</a></router-link>
          <router-link to="/spit" tag="li" activeClass="active"><a>吐槽</a></router-link>
          <router-link to="/recruit" tag="li" activeClass="active"><a>招聘</a></router-link>
          </ul> 
          <form class="sui-form sui-form pull-left"> 
          <input type="text" placeholder="输入关键词..." /> 
          <span class="btn-search fa fa-search"></span> 
          </form> 
          <div class="sui-nav pull-right info" v-if="user.name !== undefined"> 
          <li><a href="./manager" target="_blank" class="notice">{{user.name}}</a></li> 
          <li>
            <a href="./person-homepage.html" target="_blank" class="homego">
            <img :src="user.avatar" alt="用户头像" width="50px"/></a></li>
          <li><button @click="logout" class="sui-btn">退出</button></li>
          </div> 
          <div class="sui-nav pull-right info" v-else>
          <li><a href="/login" target="_blank">注册</a></li>
          <li><a href="/login" target="_blank" class="sui-btn btn-login">登录</a></li>
          </div>
        </div> 
        </div> 
      </header> 
    </div>

    <!-- nuxt是占位符,默认加载pages/index.vue  -->
    <nuxt/>

    <!-- <footer>leo在这里</footer> -->
    <div class="footer"> 
    <div class="wrapper"> 
      <div class="footer-bottom"> 
      <div class="link"> 
        <dl> 
        <dt>
          网站相关
        </dt> 
        <dd>
          关于我们
        </dd> 
        <dd>
          服务条款
        </dd> 
        </dl> 
        <dl> 
        <dt>
          常用链接
        </dt> 
        <dd>
          码农CodeHub
        </dd> 
        <dd>
          CodeHub论坛
        </dd> 
        </dl> 
        <dl> 
        <dt>
          联系我们
        </dt> 
        <dd>
          联系我们
        </dd> 
        <dd>
          加入我们
        </dd> 
        <dd>
          建议反馈
        </dd> 
        </dl> 
        <dl> 
        <dt>
          关注我们
        </dt> 
        <dd>
          微博
        </dd> 
        <dd>
          twitter
        </dd> 
        </dl> 
        <div class="xuke"> 
        <h3>内容许可</h3> 
        <p>未经许可  切勿侵权</p>
        </div> 
      </div> 
      <p class="Copyright">Copyright &copy; www.grandleo.cn, All Rights Reserved. 李伟平版权所有</p> 
      <p class="Copyright">享受更加美好的代码时光. 粤ICP备19021229号-1</p> 
      </div> 
    </div> 
    </div> 
  </div>
</template>

<script>
/**
  <link rel="stylesheet" type="text/css" href="./plugins/normalize-css/normalize.css" /> 
  <link rel="stylesheet" type="text/css" href="./plugins/yui/cssgrids-min.css" /> 
  <link rel="stylesheet" type="text/css" href="./plugins/sui/sui.min.css" /> 
  <link rel="stylesheet" type="text/css" href="./plugins/sui/sui-append.min.css" /> 
  <link rel="stylesheet" type="text/css" href="./plugins/font-awesome/css/font-awesome.min.css" /> 
  <link rel="stylesheet" type="text/css" href="./css/widget-base.css" /> 
  <link rel="stylesheet" type="text/css" href="./css/widget-head-foot.css" /> 
  <link rel="stylesheet" type="text/css" href="./css/page-headline-logined.css" /> 
 */
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'

import {getUser, removeUser} from '@/utils/auth'
export default {
  data(){
    return{
      user: {}
    }
  },
  created () {
    this.user = getUser();
  },
  methods: {
    logout(){
      //删除cookies的内容,清除用户内容
      removeUser();
      //跳转页面
      location.href = '/login'
    }
  }
}
</script>


<style>

</style>
