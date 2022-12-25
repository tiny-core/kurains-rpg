<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { firebase } from '@/firebase'
import { ROUTE_TO } from '@/router'
import { usePlayerStore } from '@/stores'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const route = useRoute()
const router = useRouter()
const player = usePlayerStore()

const openGooglePopUp = ref(false)

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------

function googleAuth() {
  const provider = new GoogleAuthProvider()

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

  openGooglePopUp.value = true

  signInWithPopup(firebase.auth, provider)
    .then(({ user }) => {
      router.push(ROUTE_TO.PROFILE)

      console.log(user)

      player.authStore({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName!,
        photoURL: user.photoURL!,
        refreshToken: user.refreshToken!
      })
    })
    .catch(({ code }) => {
      console.log('[firebase]', code)

      openGooglePopUp.value = false
    })
}

//------------------------------------------------------------------------------------------------
//  Vue hooks
//------------------------------------------------------------------------------------------------
onMounted(() => {})
</script>

<template>
  <v-footer class="text-center d-flex flex-column" app>
    <v-row no-gutters>
      <v-col v-if="!player.isAuthenticated" cols="12">
        <v-btn
          :disabled="openGooglePopUp"
          density="compact"
          prepend-icon="mdi-google"
          variant="plain"
          @click="googleAuth"
        >
          Google
        </v-btn>
        <v-btn
          :disabled="route.path === ROUTE_TO.SIGN_UP"
          density="compact"
          prepend-icon="mdi-account-plus"
          variant="plain"
          @click="router.push(ROUTE_TO.SIGN_UP)"
        >
          Registrar-se
        </v-btn>
        <v-btn
          :disabled="route.path === ROUTE_TO.SIGN_IN"
          density="compact"
          prepend-icon="mdi-login"
          variant="plain"
          @click="router.push(ROUTE_TO.SIGN_IN)"
        >
          Login
        </v-btn>
      </v-col>
      <v-col v-if="!player.isAuthenticated" class="my-4" cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <small class="text-medium-emphasis">
          &copy; 2023 | Powered by
          <a href="https://github.com/tiny-core" target="_blank">Tiny Core</a> | Designer DaniArts |
          All rights reserved
        </small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped></style>
