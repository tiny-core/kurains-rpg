import { createRouter, createWebHistory } from 'vue-router'

import { AddCharacterView, HomeView, PlayerView, SignInView, SignUpView } from '@/views'

export enum ROUTE_TO {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  PROFILE_CHARACTER_CREATE = '/profile/characters/create'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: ROUTE_TO.HOME, path: ROUTE_TO.HOME, component: HomeView },
    { name: ROUTE_TO.SIGN_IN, path: ROUTE_TO.SIGN_IN, component: SignInView },
    { name: ROUTE_TO.SIGN_UP, path: ROUTE_TO.SIGN_UP, component: SignUpView },
    {
      name: ROUTE_TO.PROFILE,
      path: ROUTE_TO.PROFILE,
      component: PlayerView,
      meta: { isPrivate: true }
    },
    {
      name: ROUTE_TO.PROFILE_CHARACTER_CREATE,
      path: ROUTE_TO.PROFILE_CHARACTER_CREATE,
      meta: { isPrivate: true },
      component: AddCharacterView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isPrivate = to.matched.some((record) => record.meta.isPrivate)

  let isAuthenticated = false

  try {
    isAuthenticated = JSON.parse(localStorage.getItem('player') ?? '').account.uid !== ''
  } catch (error) {
    isAuthenticated = false
  }

  if (isPrivate && !isAuthenticated) return next(ROUTE_TO.SIGN_IN)
  if (!isPrivate && isAuthenticated) return next(ROUTE_TO.PROFILE)

  next()
})

export default router
