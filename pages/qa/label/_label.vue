<template>
    <div>

      <!--两列布局--> 
      <div class="wrapper qa-content"> 
      <div class="fl left-list"> 
        <div class="tab-content">          
        <div id="index" class="tab-pane active"> 
          <div class="tab-bottom-line"> 
          <ul class="sui-nav nav-tabs">
             <!-- 点击修改type属性值 -->
            <li :class="(type==='new'?'active':'')"><a @click="type='new'" href="#new" data-toggle="tab">最新回答</a></li> 
            <li :class="(type==='hot'?'active':'')"><a @click="type='hot'" href="#hot" data-toggle="tab">热门回答</a></li> 
            <li :class="(type==='wait'?'active':'')"><a @click="type='wait'" href="#wait" data-toggle="tab">等待回答</a></li> 
          </ul> 
          <!-- 瀑布组件 -->
          <div class="qa-list" v-infinite-scroll="loadMore"> 
            <div class="tab-content"> 

            <!-- 绑定样式 -->
            <div id="new" :class="'tab-pane ' +(type==='new'?'active':'')"> 
              <ul class="detail-list"> 

              <li class="qa-item" v-for="(item1,index) in newlist" :key="index"> 
                <div class="fl record"> 
                <div class="number"> 
                  <div class="border useful"> 
                  <p class="usenum">{{item1.thumbup}}</p> 
                  <p>有用</p> 
                  </div> 
                  <div class="border answer"> 
                  <p class="ansnum">{{item1.reply}}</p> 
                  <p>回答</p> 
                  </div> 
                </div> 
                </div> 
                <div class="fl info"> 
                <div class="question"> 
                  <p class="author"><span class="name">{{item1.replyname}}</span><span>{{item1.replytime}}</span>回答</p> 
                  <p class="title"><a href="./qa-detail.html" target="_blank">{{item1.title}}</a></p> 
                </div> 
                <div class="other"> 
                  <ul class="fl sui-tag"> 
                  <li>Php</li> 
                  <li>Javascript</li> 
                  </ul> 
                  <div class="fr brower"> 
                  <p>浏览量 {{item1.visits}} | {{item1.createtime}} 来自 <a href="#">{{item1.nickname}} </a></p> 
                  </div> 
                </div> 
                </div> 
                <div class="clearfix"></div> </li> 
              </ul> 
            </div> 


            <div id="hot" :class="'tab-pane ' +(type==='hot'?'active':'')"> 
              <ul class="detail-list"> 

              <li class="qa-item" v-for="(item1,index) in hotlist" :key="index"> 
                <div class="fl record"> 
                <div class="number"> 
                  <div class="border useful"> 
                  <p class="usenum">{{item1.thumbup}}</p> 
                  <p>有用</p> 
                  </div> 
                  <div class="border answer"> 
                  <p class="ansnum">{{item1.reply}}</p> 
                  <p>回答</p> 
                  </div> 
                </div> 
                </div> 
                <div class="fl info"> 
                <div class="question"> 
                  <p class="author"><span class="name">{{item1.replyname}}</span><span>{{item1.replytime}}</span>回答</p> 
                  <p class="title"><a href="./qa-detail.html" target="_blank">{{item1.title}}</a></p> 
                </div> 
                <div class="other"> 
                  <ul class="fl sui-tag"> 
                  <li>Php</li> 
                  <li>Javascript</li> 
                  </ul> 
                  <div class="fr brower"> 
                  <p>浏览量 {{item1.visits}} | {{item1.createtime}} 来自 <a href="#">{{item1.nickname}} </a></p> 
                  </div> 
                </div> 
                </div> 
                <div class="clearfix"></div> </li> 
              </ul> 
            </div> 

            <div id="wait" :class="'tab-pane ' +(type==='wait'?'active':'')"> 
              <ul class="detail-list"> 

              <li class="qa-item" v-for="(item1,index) in waitlist" :key="index"> 
                <div class="fl record"> 
                <div class="number"> 
                  <div class="border useful"> 
                  <p class="usenum">{{item1.thumbup}}</p> 
                  <p>有用</p> 
                  </div> 
                  <div class="border answer"> 
                  <p class="ansnum">{{item1.reply}}</p> 
                  <p>回答</p> 
                  </div> 
                </div> 
                </div> 
                <div class="fl info"> 
                <div class="question"> 
                  <p class="author"><span class="name">{{item1.replyname}}</span><span>{{item1.replytime}}</span>回答</p> 
                  <p class="title"><a href="./qa-detail.html" target="_blank">{{item1.title}}</a></p> 
                </div> 
                <div class="other"> 
                  <ul class="fl sui-tag"> 
                  <li>Php</li> 
                  <li>Javascript</li> 
                  </ul> 
                  <div class="fr brower"> 
                  <p>浏览量 {{item1.visits}} | {{item1.createtime}} 来自 <a href="#">{{item1.nickname}} </a></p> 
                  </div> 
                </div> 
                </div> 
                <div class="clearfix"></div> </li> 
              </ul>  
            </div> 
            </div> 
          </div> 
          </div> 
        </div> 
        <div id="php" class="tab-pane">
          php 
        </div> 
        <div id="js" class="tab-pane">
          Javascript 
        </div> 
        <div id="python" class="tab-pane">
          python 
        </div> 
        <div id="java" class="tab-pane">
          java 
        </div> 
        </div> 
      </div> 
      <div class="fl right-tag"> 
        <div class="block-btn"> 
        <p>今天，有什么好东西要和大家分享么?</p> 
        <a class="sui-btn btn-block btn-share" href="./qa-submit.html" target="_blank">发布问题</a> 
        </div> 
        <div class="hot-tags"> 
        <div class="head"> 
          <h3 class="title">热门标签</h3> 
        </div> 
        <div class="tags"> 
          <ul class="sui-tag"> 
          <li>Php</li> 
          <li>Javascript</li> 
          <li>Gif</li> 
          <li>Java</li> 
          <li>C#</li> 
          <li>iOS</li> 
          <li>C++</li> 
          </ul> 
        </div> 
        </div> 
      </div> 
      <div class="clearfix"></div> 
      </div>  

    </div>
</template>

<script>
import problemApi from '@/api/problem'

import axios from 'axios'
export default {
  data(){
    return {
      type: 'new',
      pageNo_new: 1,
      pageNo_hot: 1,
      pageNo_wait: 1
    }
  },

  asyncData({params}){
    // return problemApi.getList('newlist',params.label,1,10).then(res => {
    //     return{
    //       newlist: res.data.data.rows
    //     }
    // })

    //同时调用3个函数查询数据
    return axios.all([
      problemApi.getList('newlist',params.label,1,10),
      problemApi.getList('hotlist',params.label,1,10),
      problemApi.getList('waitlist',params.label,1,10),
    ]).then(
      axios.spread(function(res1, res2, res3){
        return {
          newlist: res1.data.data.rows,
          hotlist: res2.data.data.rows,
          waitlist: res3.data.data.rows
        }
      })
    )
  },
  
  methods: {
    loadMore(){
      if (this.type==='new'){
        problemApi.getList('newlist',this.label,this.pageNo_new,10).then(res => {
          this.newlist = this.newlist.concat(res.data.data.rows)
        })
      }

      if (this.type==='hot'){
        problemApi.getList('hotlist',this.label,this.pageNo_hot,10).then(res => {
          this.hotlist = this.hotlist.concat(res.data.data.rows)
        })
      }

      if (this.type==='wait'){
        problemApi.getList('waitlist',this.label,this.pageNo_wait,10).then(res => {
          this.waitlist = this.waitlist.concat(res.data.data.rows)
        })
      }
    }
  }
}
</script>
