<script setup lang="ts">
import { onMounted } from 'vue'
import { usePlayerStore } from '@/stores'
import { useRoute } from 'vue-router'

const player = usePlayerStore()
const route = useRoute()

onMounted(() => {
  player.listen().joinTheRoom(route.params.id as string)
})
</script>

<template>
  <div>Player: {{ player.characters }}</div>
</template>

<style scoped></style>
