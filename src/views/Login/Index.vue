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
    <Vcode :show="isShow" :imgs="imgs" @fail="onFail" @success="onSuccess" @close="onClose" />
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Vcode from "vue3-puzzle-vcode";
import Img from '@/assets/Vcode.png'
export default defineComponent({
  components: {
    Vcode
  },
  setup() {
    const router = useRouter()
    const dataMap = reactive({
      isShow: false,
      isActive: false,
      userLogin: {
        account: 'admin',
        pwd: 'admin'
      },
      userRegister: {
        name: '',
        email: '',
        password: ''
      },
      imgs:[Img]
    })
    const methods = reactive({
      login() {
        const { account, pwd } = dataMap.userLogin
        console.log('登陆', account, pwd)
        if (account === '' && pwd === '') {
          console.log('请输入账号密码');
          return
        } else {
          dataMap.isShow = true
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
        if (name && email && password) console.log('注册成功')
        else {
          console.log('注册失败')
        }
      },
      onClose(){
        dataMap.isShow = false
      },
      onFail(){
        console.log('验证失败');
      },
      onSuccess(){
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