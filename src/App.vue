<script setup lang="ts">
import { RouterView } from 'vue-router'

import { AppFooter, AppNavigationBar } from '@/components/molecules'
</script>

<template>
  <v-app>
    <app-navigation-bar></app-navigation-bar>
    <router-view />
    <app-footer></app-footer>
  </v-app>
</template>

<style scoped></style>
