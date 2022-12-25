<script lang="ts" setup>
import { useRouter } from 'vue-router'

import { ROUTE_TO } from '@/router'
import { usePlayerStore } from '@/stores'

const imgUrl = new URL('@/assets/people.png', import.meta.url).href

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const player = usePlayerStore()
const router = useRouter()

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
function logout() {
  player.$reset()
  router.push(ROUTE_TO.SIGN_IN)
}
</script>

<template>
  <v-navigation-drawer expand-on-hover rail permanent>
    <v-list-item
      :prepend-avatar="player.account.photoURL ?? imgUrl"
      :title="player.account.displayName ?? player.account.email"
      class="mt-4"
      nav
    ></v-list-item>

    <v-divider class="my-2"></v-divider>

    <v-list density="compact" nav>
      <v-list-item :to="ROUTE_TO.PROFILE" prepend-icon="mdi-home" title="Inicio"></v-list-item>
      <v-list-item
        :to="ROUTE_TO.PROFILE_CHARACTER_CREATE"
        prepend-icon="mdi-account-plus"
        title="Novo Personagem"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Meus Personagens"></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item
        prepend-icon="mdi-logout-variant"
        title="Desconectar"
        class="mb-2"
        @click="logout"
      ></v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style scoped></style>
