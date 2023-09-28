/*
 * @Author: Ayan
 * @Date: 2023-09-26 23:05:38
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-27 00:21:12
 * @Description: file not
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

createApp(App).use(router).use(store).mount('#app') // 挂载路由配置
