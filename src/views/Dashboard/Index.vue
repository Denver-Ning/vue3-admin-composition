<template>
  <div class="home">
    <keep-alive>
      <sidebar />
    </keep-alive>
    <div class="main-box">
      <dashboard-head />
      <el-divider></el-divider>
      <router-view></router-view>
    </div>
    <a href="https://github.com/Denver-Ning/vue3-admin-composition" target="_blank" class="github">
      <i class="iconfont icon-github"></i>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import sidebar from '@/components/Menu.vue'
import dashboardHead from './components/Header.vue'
import dashboardMain from './main.vue'
export default defineComponent({
  components: {
    sidebar,
    dashboardHead,
    dashboardMain
  },
  setup() {
    onMounted(() => {
    })
    const methods = reactive({
    })
    return {
      ...toRefs(methods)
    };
  },
});
</script>
<style lang="less">
.home {
  display: flex;
  position: relative;
  .main-box {
    width: 100%;
    margin-left: 210px;
  }
  .el-divider--horizontal {
    margin: 0;
  }
  .el-icon-s-fold {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
  .header-left {
    display: flex;
    align-items: center;
  }
  .github{
    position: fixed;
    right: 10px;
    bottom: 150px;
    display: block;
    text-decoration: none;
    color: black;
    .iconfont{
      font-size: 45px;
      background-color: #fff;
      border-radius: 100%;
    }
  }
}
</style>