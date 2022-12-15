import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RoomView from '@/views/RoomView.vue'
import MasterView from '@/views/MasterView.vue'
import PlayerView from '@/views/PlayerView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/room/:id',
      name: 'room',
      component: RoomView
    },
    {
      path: '/master',
      name: 'master',
      component: MasterView
    },
    {
      path: '/player',
      name: 'player',
      component: PlayerView
    }
  ]
})

export default router
