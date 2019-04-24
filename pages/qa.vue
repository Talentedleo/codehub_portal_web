<template>
    <div>
      <div class="tab-nav "> 
        <div class="wrapper"> 
          <ul class="fl sui-nav nav-tabs navbar-dark"> 

            <router-link tag="li" to="/qa/label/0" activeClass="active" exact><a>首页</a></router-link>

            <!-- 每一栏问答标签都是从数据库中查询出来的 -->
            <router-link  
                tag="li"               
                :to="'/qa/label/'+item.id"  
                activeClass="active" 
                v-for="(item,index) in list"  
                :key="index">
                <a>{{item.labelname}}</a></router-link>
          
          </ul> 
          <span class="fr more"><a href="./qa-allTag.html" target="_blank">更多</a></span> 
          <div class="clearfix"></div> 
        </div>
      </div> 

        <!-- 嵌套布局,占位符 -->
        <nuxt-child/>

    </div> 
</template>

<script>
import '~/assets/css/page-sj-qa-logined.css'

import labelApi from '@/api/label'
export default {
    // data(){
    //     return {
    //         list: []
    //     }
    // },
    asyncData(){
        return labelApi.toplist().then(res => {
            console.log(res.data.data)
            return {
                list: res.data.data
            }
        })
    }
}
</script>