<script setup lang="ts">
import { io } from 'socket.io-client'
import { onMounted, ref } from 'vue'

const player = ref('')

onMounted(() => {
  const socketPlayer = io('/player', {})

  socketPlayer.on('connect', () => {
    player.value = socketPlayer.id
  })

  socketPlayer.emit('enter-the-room', '1e4601b6-aefe-4aef-ab10-3ab151f77cc7')
})
</script>

<template>
  <div>Player: {{ player }}</div>
</template>

<style scoped></style>
