<template>
<!--两列布局--> 
  <div class="wrapper release-tc"> 
   <div class="release-box"> 
    <h3>发布吐槽</h3> 
    <div class="editor"> 

        <div class="quill-editor"
            :content="content"
            @change="onEditorChange($event)"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
            v-quill:myQuillEditor="editorOption">
        </div>

     <!-- <textarea name="editor2"></textarea>  -->
     <div class="btns"> 
      <button class="sui-btn btn-danger btn-release" @click="save">发布</button> 
     </div> 
     <div class="clearfix"></div> 
    </div> 
   </div> 
   <div class="clearfix"></div> 
  </div> 
</template>

<script>
import '~/assets/css/page-sj-spit-submit.css'

import spitApi from '@/api/spit'
// 图片上传插件
import {quillRedefine} from 'vue-quill-editor-upload'
export default {
    data () {
      return {
        content: '',
        editorOption: {
          // some quill options
          /*选择那些工具，删除这个全部显示
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          }*/
        }
      }
    },
    created () {
      this.editorOption = quillRedefine({
        // 图片上传的设置
        uploadConfig:{
          action: 'http://localhost:3000/upload',// 必填参数 图片上传地址
          // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
          // 你必须把返回的数据中所包含的图片地址 return 回去
          res: (response)=>{
            return response.info
          },
          name: 'img'//图片上传的参数名
        }
      })
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      save(){
          spitApi.save({content:this.content}).then(res=>{
                //消息提醒
                this.$message({
                    message: res.data.message,
                    type: (res.data.flag?'success':'error')
                })
                //跳转到吐槽页面
                if(res.data.flag){
                    this.$router.push('/spit')
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