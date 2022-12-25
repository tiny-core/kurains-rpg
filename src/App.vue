<script setup lang="ts">
import { RouterView } from 'vue-router'

import { AppFooter, AppNavigationBar } from '@/components/molecules'
import { usePlayerStore } from '@/stores'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const player = usePlayerStore()
</script>

<template>
  <v-app>
    <app-navigation-bar v-if="player.isAuthenticated"></app-navigation-bar>
    <router-view />
    <app-footer></app-footer>
  </v-app>
</template>

<style scoped></style>
