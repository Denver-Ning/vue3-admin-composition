<template>
  <div id="tiny-box" :style="{width:width}">
    <Editor v-model:value="richText" :init="init"></Editor>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from 'vue';
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver'  //编辑器主题，不引入则报错
import 'tinymce/icons/default'  //引入编辑器图标icon
import 'tinymce/themes/silver'
import 'tinymce/plugins/print'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/media'
import 'tinymce/plugins/template'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/table'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/help'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/autoresize'
import { number } from 'echarts';
export default defineComponent({
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      default: () => {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
    height: {
      type: String || Number,
      default: '360px'
    },
    width:{
      type:String || Number,
      default:'auto'
    }
  },
  emits:['input'],
  setup(props,ctx) {
    const dataMap = reactive({
      richText: computed(() => {
        return props.value
      }),
    })
    const tinyOptions = reactive({
      init: {
        selector: '#tiny-box',
        min_height:360,
        height: props.height,//编辑器高度
        elementpath: false,
        language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
        language: 'zh_CN',//语言
        plugins: 'print advlist preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table \
                  charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize',
        toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
                  styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
                  table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | lineheight',
        skin_url: '/tinymce/skins/ui/oxide',// skin路径
        font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
        branding: false,//是否禁用“Powered by TinyMCE”
        toolbar_sticky: true,
        autosave_ask_before_unload: false,
        menubar: menubar,
        init_instance_callback: (editor: any) => {
          console.log(editor);
          
          if (props.value) {
            editor.setContent(props.value)
          }
          editor.on('NodeChange Change KeyUp SetContent', () => {
            ctx.emit('input', editor.getContent())
          })
        },
      }
    })
    onMounted(() => {
      tinymce.init({})
    })
    return {
      ...toRefs(dataMap),
      ...toRefs(tinyOptions)
    };
  },
});
</script>
<style lang="less" scoped>

</style>