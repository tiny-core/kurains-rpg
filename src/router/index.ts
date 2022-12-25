import { createRouter, createWebHistory } from 'vue-router'

import {
  AddCharacterView,
  AdminMainView,
  HomeView,
  PlayerView,
  SignInView,
  SignUpView
} from '@/views'

export enum ROUTE_TO {
  HOME = '/',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  PROFILE = '/profile',
  PROFILE_CHARACTER_CREATE = '/profile/characters/create',
  ADMINISTRATOR = '/admin'
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
      component: AddCharacterView,
      meta: { isPrivate: true }
    },
    {
      name: ROUTE_TO.ADMINISTRATOR,
      path: ROUTE_TO.ADMINISTRATOR,
      component: AdminMainView,
      meta: { isAdminOnly: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isPrivate = to.matched.some((record) => record.meta.isPrivate)
  const isAdminOnly = to.matched.some((record) => record.meta.isAdminOnly)

  let isAuthenticated = false
  let isAdministrator = false

  try {
    const user = JSON.parse(localStorage.getItem('player') ?? '{}')
    isAuthenticated = user.account.uid !== ''
    isAdministrator = user.account.isAdministrator
  } catch (error) {
    isAuthenticated = false
    isAdministrator = false
  }

  if (isAdminOnly) return isAdministrator ? next() : next(ROUTE_TO.PROFILE)
  if (isPrivate && !isAuthenticated) return next(ROUTE_TO.SIGN_IN)
  if (!isPrivate && isAuthenticated) return next(ROUTE_TO.PROFILE)

  return next()
})

export default router
