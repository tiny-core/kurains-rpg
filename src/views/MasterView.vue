<script lang="ts" setup>
import { onMounted } from 'vue'
import { dice, MersenneTwister19937 } from 'random-js'

import { useMasterStore } from '@/stores'

const master = useMasterStore()

onMounted(() => {
  master.listen()
})
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <div>Room ID: {{ master.roomID }}</div>
        </v-col>
        <v-divider></v-divider>
        <v-col>
          {{ dice(20, 2)(MersenneTwister19937.autoSeed()) }}
        </v-col>
        <v-col cols="12">
          <div>
            <p v-for="(player, i) in master.players" :key="i">{{ i }}: {{ player }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped></style>
