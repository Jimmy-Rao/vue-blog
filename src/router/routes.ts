/*
 * @Author: Ayan
 * @Date: 2023-09-28 14:07:54
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 14:12:46
 * @Description: file not
 */
const routers = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
    },
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/vuex.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]

export default routers;
