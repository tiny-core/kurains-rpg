<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import { ROUTE_TO } from '@/router'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const router = useRouter()

//------------------------------------------------------------------------------------------------
//  Vue hooks
//------------------------------------------------------------------------------------------------
onBeforeMount(() => router.push(ROUTE_TO.SIGN_IN))
</script>

<template>
  <v-main>Home</v-main>
</template>

<style scoped></style>
