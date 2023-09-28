/*
 * @Author: Ayan
 * @Date: 2023-09-28 09:37:24
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 09:52:24
 * @Description: file not
 */
import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000 // 设置超时时间 20s
})

// 前置拦截器 （发起请求之前的拦截）
axios.interceptors.request.use(
  (response) => {
    // do sth
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器 （获取到响应时拦截）
axios.interceptors.response.use(
  (response) => {
    // do sth
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`code:${code},message:${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(error)
    }
    return Promise.reject(error)
  }
)

export default axios
