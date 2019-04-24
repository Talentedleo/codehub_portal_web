<template>
    <div>

   <!--两列布局--> 
   <div class="wrapper tag-item"> 
    <div class="fl left-list"> 
     <div class="tc-data-list"> 
      <div class="tc-list"> 
       <ul class="detail-list" v-infinite-scroll="loadMore"> 

        <li class="qa-item" v-for="(item, index) in list" :key="index"> 
         <div class="fl record"> 
          <div class="number"> 
           <div class="border useful"> 
            <p class="usenum"><a href="#" @click="thumbup(index)" class="zan"><i :class="'fa fa-thumbs-up ' + item.zan" aria-hidden="true"></i></a></p> 
            <p class="zannum"> {{item.thumbup}} </p> 
           </div> 
           <div class="border answer"> 
            <a href="#" class="star"><i class="fa fa-star-o" aria-hidden="true"></i></a> 
           </div> 
          </div> 
         </div> 
         <div class="info"> 
          <p class="text"> <router-link :to="'/spit/'+item.id"> {{item.content}} </router-link> </p> 
          <div class="other"> 
           <div class="fl date"> 
            <span>{{item.publishtime}}</span> 
           </div> 
           <div class="fr remark"> 
            <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true"></i> 分享</a> 
            <a href="#" data-toggle="modal" data-target="#remarkModal" class="comment"><i class="fa fa-commenting" aria-hidden="true"></i> 回复</a> 
           </div> 
          </div> 
         </div> 
         <div class="clearfix"></div> </li> 
       
       </ul>        
      </div> 
     </div> 

        </div> 
        <div class="fl right-tag"> 
        <div class="block-btn"> 
        <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p> 
        <!-- <a class="sui-btn btn-block btn-share" href="/spit/submit" target="_blank">发吐槽</a>  -->
        <router-link class="sui-btn btn-block btn-share" to="/spit/submit">发吐槽</router-link>
        </div> 
        </div> 
        <div class="clearfix"></div> 
    </div> 
    </div> 
</template>

<script>
import '~/assets/css/page-sj-spit-index.css'

import spitApi from '@/api/spit'
import {getUser} from '@/utils/auth'
export default {
    // 服务器端渲染数据
    asyncData(){
        return spitApi.search(1,2,{}).then(res => {
            //输出吐槽
            //console.log(res.data.data)
            //给list中的每个对象加入列: 动态加入. map是迭代每项的意思
            let temp = res.data.data.rows.map(item => {
                return {
                    ...item,  //...传播函数,带上原来的数据
                    zan: ''  //这个参数是用来判断是否已经点了赞
                }
            })
            return {
                //list: res.data.data.rows
                //返回
                list: temp
            }
        })
    },
    data(){
        return {
            pageNo: 1
        }
    },
    methods: {
        //瀑布流组件加载数据
        loadMore(){
            spitApi.search(++this.pageNo, 2, {'state':'1'}).then(res => {
                this.list = this.list.concat(res.data.data.rows)
            })
        },
        //点赞
        thumbup(index){
            //点赞之前提示用户先登录
            if (getUser().name===undefined){
                this.$message({
                    message: '只有登录后才能点赞!',
                    type: 'error'
                })
                return
            }

            //只能点一次赞
            if (this.list[index].zan==='color'){
                this.$message({
                    message: '只能点一次赞!',
                    type: 'error'
                })
                return
            }

            //传递列表的索引,方便根据索引获取每一条数据
            console.log(this.list[index])
            spitApi.thumbup(this.list[index].id).then(res => {
                this.$message({
                    message: res.data.message,
                    type: (res.data.flag?'success':'error')
                })
                if (res.data.flag){
                    //让点赞数加一
                    this.list[index].thumbup++
                    //给大拇指加颜色
                    this.list[index].zan = 'color'  //color可以给样式加颜色
                }
            })
        }
    }
}
</script>