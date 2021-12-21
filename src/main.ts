import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from './router/index'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import '@/assets/iconfont/iconfont.css'
import './styles/style.less'
import utils from './utils/index'
import VueI18n from './lang'
import * as directives from './directives'


const app = createApp(App)

// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

app.config.globalProperties.$utils = utils
app.use(router)
app.use(VueI18n)
app.mount('#app')
