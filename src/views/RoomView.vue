<script setup lang="ts">
import { onMounted } from 'vue'
import { usePlayerStore } from '@/stores'
import { useRoute } from 'vue-router'

const player = usePlayerStore()
const route = useRoute()

onMounted(() => {
  player.listen().joinTheRoom(route.params.id.toString())
})
</script>

<template>
  <div>Player: {{ player.character }}</div>
</template>

<style scoped></style>
