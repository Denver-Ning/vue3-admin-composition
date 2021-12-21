<template>
  <div class="box">
    <div class="container" :class="[isActive ? 'right-panel-active' : '']">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form__title">注册</h2>
          <input type="text" placeholder="用户名" v-model="userRegister.name" class="input" />
          <input type="email" placeholder="邮箱" v-model="userRegister.email" class="input" />
          <input type="password" placeholder="密码" v-model="userRegister.password" class="input" />
          <button class="btn" @click.prevent="register()">注册</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form__title">登录</h2>
          <input type="text" placeholder="账号" class="input" v-model="userLogin.account" />
          <input type="password" placeholder="密码" class="input" v-model="userLogin.pwd" />
          <a href="#" class="link">忘记密码?</a>
          <button class="btn" @click.prevent="login()">登录</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn" @click.prevent="signInBtn()">登录</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp" @click.prevent="signUpBtn()">注册</button>
          </div>
        </div>
      </div>
      <i class="el-icon-edit"></i>
    </div>
    <!-- <Vcode :show="isShow" @fail="onFail" @success="onSuccess" @close="onClose" /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, h } from 'vue';
import { useRouter } from 'vue-router';
// import Vcode from "vue3-puzzle-vcode";
// import Img from '@/assets/Vcode.png'
import { ElNotification, ElLoading } from 'element-plus';
import type { Loign,Register } from './login'
export default defineComponent({
  components: {
    // Vcode
  },
  setup() {
    const router = useRouter()
    const dataMap = reactive({
      isShow: false,
      isActive: false,
      userLogin: {} as Loign,
      userRegister: {
        name: '',
        email: '',
        password: ''
      } as Register,
      // imgs: [Img]
    })
    const methods = reactive({
      login() {
        const loading = ElLoading.service({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })
        const { account, pwd } = dataMap.userLogin
        if (account === '' && pwd === '') {
          console.log('请输入账号密码');
          loading.close()
          return
        } else {
          if (account !== 'admin' || pwd !== 'admin') {
            ElNotification.error({
              title: 'Error',
              message: 'This is account or password is error',
              type: 'error',
            })
            loading.close()
            return
          }
          router.push('/dashboard')
          dataMap.isShow = true
          ElNotification.success({
            title: 'Delver丶ning',
            message: h('p', { style: 'color:green' }, '努力学习中ing.......',),
            duration: 0,
          })
          loading.close()
        }
      },
      signUpBtn() {
        dataMap.isActive = true
      },
      signInBtn() {
        dataMap.isActive = false
      },
      register() {
        const { name, email, password } = dataMap.userRegister
        if (name && email && password) {
        }
        else {
          console.log('注册失败')
        }
      },
      onClose() {
        dataMap.isShow = false
      },
      onFail() {
        console.log('验证失败');
      },
      onSuccess() {
        methods.onClose() 
        router.push('/dashboard')
      }
    })
    return {
      ...toRefs(methods),
      ...toRefs(dataMap)
    };
  },
});
</script>
<style>
@import url("./login.less");
</style>
