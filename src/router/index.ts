import { createRouter, createWebHistory } from 'vue-router'

import AdministrationView from '@/views/admin/MainView.vue'
import HomeView from '@/views/HomeView.vue'

export enum ROUTE_TO {
  HOME = '/',
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  PROFILE = 'profile',
  ADMINISTRATOR = 'administrator',
  RPG = 'rpg',
  EXPERTISES = 'expertises',
  CREATE_EXPERTISES = 'create-expertises',
  UPDATE_EXPERTISES = 'update-expertises'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: ROUTE_TO.HOME, path: '/', component: HomeView },
    // { name: ROUTE_TO.SIGN_IN, path: '/sign-in', component: SignInView },
    // { name: ROUTE_TO.SIGN_UP, path: '/sign-up', component: SignUpView },

    // { name: ROUTE_TO.PROFILE, path: '/profile', component: PlayerView, meta: { isPrivate: true } },

    {
      name: ROUTE_TO.ADMINISTRATOR,
      path: '/admin',
      component: AdministrationView,
      meta: { isAdminOnly: true }
    }
    // {
    //   name: ROUTE_TO.RPG,
    //   path: '/rpg',
    //   component: AdminRPGMainView,
    //   meta: { isAdminOnly: true }
    // },
    // {
    //   name: ROUTE_TO.EXPERTISES,
    //   path: '/expertises',
    //   component: AdminExpertiseView,
    //   meta: { isAdminOnly: true }
    // },
    // {
    //   name: ROUTE_TO.CREATE_EXPERTISES,
    //   path: '/expertises/create',
    //   component: AdminExpertiseSetView,
    //   meta: { isAdminOnly: true }
    // },
    // {
    //   name: ROUTE_TO.UPDATE_EXPERTISES,
    //   path: '/expertises/update/:uid',
    //   component: AdminExpertiseSetView,
    //   meta: { isAdminOnly: true }
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // const isPrivate = to.matched.some((record) => record.meta.isPrivate)
  // const isAdminOnly = to.matched.some((record) => record.meta.isAdminOnly)

  // let isAuthenticated = false
  // let isAdministrator = false

  // try {
  //   const user = JSON.parse(localStorage.getItem('player') ?? '{}')
  //   isAuthenticated = user.account.uid !== ''
  //   isAdministrator = user.account.isAdministrator
  // } catch (error) {
  //   isAuthenticated = false
  //   isAdministrator = false
  // }

  // if (isAdminOnly) return isAdministrator ? next() : next({ path: '/profile' })
  // if (isPrivate && !isAuthenticated) return next({ path: '/sign-in' })
  // if (!isPrivate && isAuthenticated) return next({ path: '/profile' })

  return next()
})

export default router
