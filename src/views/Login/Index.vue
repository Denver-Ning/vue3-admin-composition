<template>
  <div class="box">
    <div class="container" :class="[isActive ? 'right-panel-active' : '']">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form action="#" class="form" id="form1">
          <h2 class="form__title">注册</h2>
          <input type="text" placeholder="用户名" v-model="name" class="input" />
          <input type="email" placeholder="邮箱" v-model="email" class="input" />
          <input type="password" placeholder="密码" v-model="password" class="input" />
          <button class="btn" @click.prevent="register()">注册</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form action="#" class="form" id="form2">
          <h2 class="form__title">登录</h2>
          <input type="text" placeholder="账号" class="input" v-model="account" />
          <input type="password" placeholder="密码" class="input" v-model="pwd" />
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
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref, reactive } from 'vue';
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const userLogin = reactive({
      account: '',
      pwd: ''
    })
    const isActive = ref(false)
    const userRegister = reactive({
      name: '',
      email: '',
      password: ''
    })
    const methods = reactive({
      login() {
        const { account, pwd } = userLogin
        console.log('登陆', account, pwd)
        router.push('/home')
      },
      signUpBtn() {
        isActive.value = true
      },
      signInBtn() {
        isActive.value = false
      },
      register() {
        const { name, email, password } = userRegister
        if (name && email && password) console.log('注册成功')
        else {
          console.log('注册失败')
        }
      }
    })
    return {
      isActive,
      ...toRefs(methods),
      ...toRefs(userLogin),
      ...toRefs(userRegister)
    };
  },
});
</script>
<style>
@import url("./login.less");
</style>