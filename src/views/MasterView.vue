<script lang="ts" setup>
import { io } from 'socket.io-client'
import { onMounted, ref } from 'vue'
import { uuid4, MersenneTwister19937 } from 'random-js'

const players = ref<Array<string>>([])

onMounted(() => {
  const socketMaster = io('/master', {})
  const key = uuid4(MersenneTwister19937.autoSeed())

  console.log('room id: ', key)

  socketMaster.on('joined-the-room', (id) => {
    players.value.push(id)
  })

  socketMaster.on('leave-the-room', (id) => {
    const index = players.value.findIndex((player) => player === id)
    if (index > -1) players.value.splice(index, 1)
  })

  socketMaster.emit('enter-the-room', '1e4601b6-aefe-4aef-ab10-3ab151f77cc7')
})
</script>

<template>
  <div>
    <p v-for="(player, i) in players" :key="i">{{ i }}: {{ player }}</p>
  </div>
</template>

<style scoped></style>
