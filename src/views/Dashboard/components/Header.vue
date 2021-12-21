<template>
  <div class="header">
    <div class="header-left">
      <i class="el-icon-s-fold" @click="showSilder()"></i>
      <!-- el-icon-s-unfold -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <div class="fullscreen" @click="fullScreen()">
        <i class="iconfont icon-24gl-fullScreenEnter"></i>
      </div>
      <div>
        <i class="iconfont icon-shouye1"></i>
      </div>
      <div>
        <el-dropdown trigger="click" @command="langChange()">
          <span>
            <i class="iconfont icon-zhongyingwen"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :disabled="language === 'zh-CN'">中文</el-dropdown-item>
              <el-dropdown-item :disabled="language === 'en-US'">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>
        <img src="https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646" alt />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import bus from '../../../libs/bus'
export default defineComponent({
  setup() {
    const router = useRouter()
    const collapse = ref(false)
    const isfullScreen = ref(false)
    const { proxy }: any = getCurrentInstance();
    const $utils = proxy.$utils
    const dataMap = reactive({
      language:window.localStorage.getItem('language')
    })
    const methods = reactive({
      showSilder() {
        collapse.value = !collapse.value
        bus.emit('getCollapse', collapse.value);
      },
      fullScreen() {
        if (!isfullScreen.value) {
          $utils.fullScreen()
        } else {
          $utils.closeFullScreen()
        }
      },
      langChange() {
        const langChange = window.localStorage.getItem('language')
        if (langChange === 'zh-CN') {
          window.localStorage.setItem('language', 'en-US')
          router.go(0)
        } else if(langChange === 'en-US'){
          window.localStorage.setItem('language', 'zh-CN')
          router.go(0)
        }
      },
    })
    onMounted(() => {
    })
    return {
      ...toRefs(methods),
      ...toRefs(dataMap)
    };
  },
});
</script>
<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  .header-left {
    margin-left: 15px;
  }
  .header-right {
    display: flex;
    margin-right: 15px;
    height: 100%;
    align-items: center;
    div {
      height: 100%;
      display: flex;
      align-items: center;
      width: 50px;
      img {
        width: 50px;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
  .iconfont {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>