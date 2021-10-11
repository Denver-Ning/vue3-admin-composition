<template>
  <router-view />
</template>


<script lang="ts">
import { defineComponent, h, onMounted } from 'vue'
import { ElNotification } from 'element-plus'
export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      ElNotification({
        title: 'Delver丶ning',
        message: h('p',{style:'color:green'},'努力学习中ing.......',),
        duration: 0,
      })
    })
    return {
    };
  },
});
</script>

<style>
</style>