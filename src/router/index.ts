/*
 * @Author: Ayan
 * @Date: 2023-09-26 23:54:53
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-27 00:02:24
 * @Description: file not
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
