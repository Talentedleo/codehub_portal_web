<template>
   <!--两列布局--> 
   <div class="wrapper tc-detail"> 
    <div class="fl left-list"> 
     <div class="tc-detail"> 
      <!-- 标题区 --> 
      <div class="detail-tit"> 
       <div class="detail-author"> 
        <a href="javascript:;">{{item.nikename}}</a> 发布 
       </div> 
       <div class="detail-content"> 
        <!-- v-html:解析带标签的字符串成页面 -->
        <p v-html="item.content">{{item.content}}</p> 
        <!-- <img src="~/assets/img//widget-tc-detail.png" alt="" />  -->
       </div> 
       <div class="detail-tool"> 
        <ul> 
         <li><span class="star"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.thumbup}}</span></li> 
         <li><a href="#" data-toggle="modal" data-target="#shareModal"><i class="fa fa-share-alt" aria-hidden="true"></i> {{item.share}}</a></li> 
         <!-- dialogVisible=true,显示弹框,发表评论 -->
         <li><a @click="dialogVisible=true;content=''" data-toggle="modal" data-target="#remarkModal"><i class="fa fa-commenting" aria-hidden="true"></i> {{item.comment}}</a></li> 
        </ul> 
       </div> 
      </div> 
      <!-- 评论区 --> 
      <div class="comment-area"> 
       <div class="comment-tit"> 
        <span>评论</span> 
       </div> 
       <ul class="comment-list">

        <li v-for="(item, index) in commentlist" :key="index"> 
         <div class="item-photo"> 
          <img src="~/assets/img//widget-widget-photo.png" alt="" /> 
         </div> 
         <div class="item-content"> 
          <p class="author"><a href="javascript:;">{{item.nikename}}</a> 发布</p> 
          <p class="content">{{item.content}}</p> 
         </div> 
         <div class="item-thumb"> 
          <div>
           <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{item.thumbup}}
          </div> 
         </div> </li> 

       </ul> 
      </div> 
     </div> 
    </div> 
    <div class="fl right-tag"> 
     <div class="block-btn"> 
      <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p> 
      <a class="sui-btn btn-block btn-share" href="./spit-submit.html" target="_blank">发吐槽</a> 
     </div> 
    </div> 
    <div class="clearfix"></div> 

    <el-dialog
        title="评论"
        :visible.sync="dialogVisible"
        width="40%">
        <div class="quill-editor"
            :content="content"
            @change="onEditorChange($event)"
            v-quill:myQuillEditor="editorOption">
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">提 交</el-button>
        </span>
    </el-dialog>

   </div> 
</template>

<script>
import '~/assets/css/page-sj-spit-detail.css'

import spitApi from '@/api/spit'
export default {
    data(){
        return {
            dialogVisible: false,
            content: '',
            editorOption: {},
            pojo: {}
        }
    },

    //服务器数据渲染
    asyncData(params){       
        return spitApi.findById(params.id).then(res => {
            return spitApi.commentlist(params.id).then(res2 => {
                return {
                    item: res.data.data,
                    commentlist: res2.data.data,
                    pojo: {
                        // 服务器渲染完才能拿到吐槽id,comment就可以根据这个id新增
                        id: params.id
                    }
                }
            })

            
        })
    },

    methods: {
        //编辑器内容改变才弹框
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text)
            this.content = html
        },
        save(){
            spitApi.save({content: this.content,parentid:this.pojo.id}).then(res => {
            //消息提醒
            this.$message({
                message: res.data.message,
                type: (res.data.flag?'success':'error')
            })
            //关闭弹窗
            if(res.data.flag){
                    this.dialogVisible=false //关闭弹出窗
                    //重新请求评论
                    spitApi.commentlist(this.pojo.id).then(res=>{
                        this.commentlist = res.data.data
                    })
                }
            })
        }
    } 
}
</script>

<style>
    .quill-editor {
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
    }
</style>