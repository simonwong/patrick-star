import axios from 'axios'

const isDevelopment = process.env.NODE_ENV === 'development'
const devBaseUrl = 'http://192.168.1.113:3000/api'

// 实例化axios
const instance = axios.create({
    baseURL: isDevelopment ? devBaseUrl : '',
    timeout: 10000,
})

// // 请求拦截器 可以用于token
// instance.interceptors.request.use((config) => {
//   return config
// }, error => Promise.reject(error))

// // 响应拦截器 用于请求失败时，拦截触发错误通知？
// instance.interceptors.response.use((res) => {
// //   setNotice('success', res.status, res.statusText)
//   return res
// }, (error) => {
//   const res = error.response
//   if (res) {
//     // setNotice('error', res.status, res.statusText)
//   } else {
//     // setNotice('error', 'Error', error)
//   }
//   Promise.reject(error)
// })

const createAPI = (url, method, config) => {
  const cfg = config || {}
  return instance({
    url,
    method,
    ...cfg,
  })
}

export default createAPI
