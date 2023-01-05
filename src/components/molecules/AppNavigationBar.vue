<script lang="ts" setup>
import { ROUTE_TO } from '@/router'
import { useAccountStore } from '@/stores'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const accountStore = useAccountStore()

const imgUrl = new URL('@/assets/people.png', import.meta.url).href

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
</script>

<template>
  <v-navigation-drawer v-if="accountStore.isConnected" expand-on-hover rail permanent>
    <v-list-item
      :prepend-avatar="accountStore.profile.photoURL ?? imgUrl"
      :title="accountStore.profile.displayName ?? accountStore.profile.email"
      :subtitle="accountStore.profile.displayName ? accountStore.profile.email : ''"
      class="mt-4"
      nav
    ></v-list-item>

    <v-divider class="my-2"></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        :to="{ name: ROUTE_TO.HOME }"
        prepend-icon="mdi-home"
        title="Inicio"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-plus" title="Novo Personagem"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Meus Personagens"></v-list-item>

      <v-divider v-if="accountStore.profile.isAdministrator" class="my-2"></v-divider>

      <v-list-item
        v-if="accountStore.profile.isAdministrator"
        :to="{ name: ROUTE_TO.ADMINISTRATOR }"
        prepend-icon="mdi-shield-crown"
        title="Administração"
        class="mt-4"
        nav
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list-item
        prepend-icon="mdi-logout-variant"
        title="Desconectar"
        class="mb-2"
        @click="accountStore.signOut"
      ></v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style scoped></style>
