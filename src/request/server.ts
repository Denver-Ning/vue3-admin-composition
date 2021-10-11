// 配置axios拦截器
import axios from 'axios'
import { ElLoading } from 'element-plus'
const serive = axios.create({
  baseURL: 'https://test-gateway.51beauty.com.cn/',
  timeout: 1000
})
let loading: any;
function startLoading() {
  loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,0.7)'
  });
}
function endLoading() {
  loading && loading.close()
}
serive.interceptors.request.use((config) => {
  startLoading()
  return config
}, function (error) {
  endLoading()
  return Promise.reject(error)
})

serive.interceptors.response.use((config) => {
  endLoading()
  return config
}, function (error) {
  endLoading()
  return Promise.reject(error)
})

export default serive