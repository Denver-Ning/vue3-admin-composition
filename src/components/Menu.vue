<template>
  <div class="silder-box">
    <div class="silder-link">
      <img class="silder-logo" src="@/assets/logo.png" alt />
      <h1 class="silder-title" v-if="!isCollapse">Vue3后台</h1>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="isCollapse"
      text-color="#fff"
      router
      :collapse-transition="true"
    >
      <el-menu-item index="/dashboard">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="/1">
        <template #title>
          <i class="iconfont icon-zujian"></i>
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dashboard/hh">item one</el-menu-item>
          <el-menu-item index>item one</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="iconfont icon-tubiao-zhuzhuangtu"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/brokenLine">折线图</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive, toRefs, onBeforeUnmount } from 'vue'
import bus from "../libs/bus"
export default defineComponent({
  setup(props: any, context: any) {
    const methods = reactive({
      isCollapse: false
    })
    const getCollapse = (collapse: boolean = false): void => {
      methods.isCollapse = collapse
    }
    bus.on('getCollapse' as string, getCollapse as any);
    onMounted(() => {
    })
    onBeforeUnmount(() => {
      bus.off('getCollapse' as string, getCollapse as any)
    })
    return {
      ...toRefs(methods)
    };
  },
});
</script>
<style lang="less" scoped>
.silder-box {
  background-color: #001529;
  transition: all 0.2s ease 0s;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  .silder-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 10px 0;
    .silder-logo {
      width: 35px;
    }
    .silder-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      font-size: 24px;
      margin-left: 5px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      transition: all .5s;
    }
  }

  .el-menu-vertical-demo {
    border-right: none;
  }
}
.iconfont{
  margin-right: 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
}
</style>