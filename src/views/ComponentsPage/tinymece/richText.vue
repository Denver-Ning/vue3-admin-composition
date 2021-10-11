<template>
  <div id="rich-box">
    <tinymce v-model:value="content" @input="input" />
    <div v-html="content">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import tinymce from '@/components/Tinymce.vue'

export default defineComponent({
  components: {
    tinymce
  },
  setup() {
    const dataMap = reactive({
      content: '<h1 style="text-align: center;">Hello TinyMCE demo!</h1> \
      <p><ul><li><a href="//www.tinymce.com/docs/" target="_black">TinyMCE</a>是一款易用、且功能强大的所见即所得的富文本编辑器。</li> \
      <li>官网及文档：<a href="//www.tiny.cloud">www.tiny.cloud</a></li> \
      <li>Github：<a href="//www.tiny.cloud/get-tiny/self-hosted/">www.tiny.cloud/get-tiny/self-hosted/</a></li> \
      </ul>',
      input(value: any) {
        dataMap.content = value
      }
    })
    return {
      ...toRefs(dataMap)
    }
  },
});
</script>
<style scoped lang="less">
@import '@/styles/common.less';
#rich-box {
  padding:@globalPadding;
}
</style>