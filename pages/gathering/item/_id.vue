<template>
    <!--中间布局--> 
  <div class="wrapper activities"> 
   <h1>{{item.name}}</h1> 
   <div class="img-text"> 
    <div class="left-img"> 
     <img :src="item.image" alt="" /> 
    </div> 
    <div class="right-txt"> 
        <p>开始时间： {{item.starttime}}</p>
        <p>结束时间： {{item.endtime}}</p>
        <p>举办地点： {{item.address}}</p>
        <p>主办方： {{item.sponsor}}</p>
        <p>报名截止： {{item.enrolltime}}
     <div class="join"> 
      <button class="sui-btn btn-danger">立即报名</button> 
      <span class="will">报名即将开始</span> 
     </div> 
    </div> 
   </div> 
   <div class="simple-text"> 
    <div class="left-content"> 
     <div class="content-item"> 
      <div class="tit">
       <span>大会介绍</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.summary}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 

      <div class="tit">
       <span>议题简介</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.detail}}</p> 
       </div> 
    
     </div> 
    </div> 
    <div class="right-intro"> 
     <div class="content-item"> 
      <div class="tit">
       <span>活动组织者</span>
      </div> 
      <div class="text"> 
       <p>主办方： {{item.sponsor}}</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>相关链接</span>
      </div> 
      <div class="text"> 
       <p>活动官网： infoQ.com</p> 
      </div> 
     </div> 
     <div class="content-item"> 
      <div class="tit">
       <span>分享扩散</span>
      </div>
      <!-- 需要分享的页面data-url -->
      <div class="social-share"
        data-sites="weibo,wechat"
        data-url="http://www.itheima.com"
        :data-title="item.name">
      </div>
     </div> 
    </div> 
   </div> 
  </div> 
</template>

<script>
import '~/assets/css/page-sj-activity-detail.css'

/** 
import axios from 'axios'
export default {
    // http://192.168.12.19:7300/mock/5c0fccff21b9fe089205875a/tensquare/gathering/gathering
    // 服务端 渲染: 用的方法
    asyncData(params){
        //下划线后面的字符串就是参数的key,这里的文件名是_id.vue
        //params固定写法
        console.log(params.id)
        //根据获取的参数去请求数据
        //url http://192.168.12.19:7300/mock/5c0fccff21b9fe089205875a/tensquare/gathering/gathering/{gatheringId}
        const url = `http://192.168.12.19:7300/mock/5c0fccff21b9fe089205875a/tensquare/gathering/gathering/${params.id}`
        return axios.get(url).then(res => {
            console.log(res.data.data)
            return {
                item: res.data.data
            }
        })
    },
    //在 客户端 使用的
    data(){

    }
}
*/

import gatheringApi from '@/api/gathering'
export default {
    asyncData(params){
        //根据id查询活动
        return gatheringApi.findById(params.id).then(res => {
            return {
                item: res.data.data
            }
        })
    },
    data(){
        
    },
    //分享组件添加: 在页面打开
    head: {
        script: [
            { src:
            'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js' }
        ],
        link: [
            { rel: 'stylesheet', href:
            'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
        ]
    }
}
</script>
