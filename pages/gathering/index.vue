<template>
    <div>
        <!--中间布局--> 
        <div class="wrapper activities"> 
        <div class="activity-card-list"> 
            <div class="top-title"> 
            <h4 class="latest">最新活动</h4>      
            <div class="clearfix"></div> 
            </div> 
            <!-- div 中加入瀑布流特性 -->
            <div class="activity-list" v-infinite-scroll="loadMore"> 
            <ul class="activity"> 
            <li class="activity-item" v-for="(item,index) in list" :key="index"> 
            <div class="activity-inner"> 
                <a href="http://"></a> 
                <div class="img">
                <a :href="'/gathering/item/' + item.id" target="_blank"><img :src="item.image" alt="" /></a>
                </div> 
                <div class="text"> 
                <p class="title">{{item.name}}</p> 
                <div class="fl goin"> 
                <p>时间：{{item.starttime}}</p> 
                <p>城市：{{item.city}}</p> 
                </div> 
                <div class="fr btn"> 
                <span class="sui-btn btn-bao">立即报名</span> 
                </div> 
                <div class="clearfix"></div> 
                </div> 
            </div> 
            </li> 
            </ul> 
            </div> 
        </div> 
        </div>         
    </div>
</template>

<script>
import '~/assets/css/page-sj-activity-index.css'

import gatheringApi from '@/api/gathering'
export default {
    asyncData(){
        return gatheringApi.search(1, 10, {state: '1'}).then(res => {
            return {
                list: res.data.data.rows
            }
        })
    },
    data(){
        return {
            //添加 pageNo 用于记录页码
            pageNo: 1
        }
    },
    methods: {
        loadMore(){
            //alert("瀑布流");
            //在这里发起请求查询数
            gatheringApi.search(++this.pageNo, 10, {state: '1'}).then(res => {
                //console.log(res.data.data.rows);
                //concat的方法就是拼接数组
                this.list = this.list.concat(res.data.data.rows)
            })
        }
    }
}

/** 
import axios from 'axios'
export default {
    asyncData(){
        return axios.post(`http://192.168.12.19:7300/mock/5c0fccff21b9fe089205875a/tensquare/gathering/gathering/search/1/10`)
        .then(res => {
            return {
                list: res.data.data.rows
            }
        })
    }
}
*/
</script>