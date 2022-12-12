import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RoomView from '@/views/RoomView.vue'
import MasterView from '@/views/MasterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/room',
      name: 'room',
      component: RoomView
    },
    {
      path: '/master',
      name: 'master',
      component: MasterView
    }
  ]
})

export default router
