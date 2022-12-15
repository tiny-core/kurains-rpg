<script lang="ts" setup>
import { usePlayerStore } from '@/stores'
import { ref, onMounted } from 'vue'

const player = usePlayerStore()

const items = ref([0, 1, 2, 3, 4])

onMounted(() => {})
</script>

<template>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <v-card>
            <v-card-title>Ficha do personagem</v-card-title>
            <v-divider></v-divider>
            <v-container fluid>
              <v-row>
                <v-col>
                  <v-text-field label="Nome" variant="underlined"></v-text-field>
                  <v-text-field label="Level" type="number" variant="underlined"></v-text-field>
                  <v-text-field label="Idade" type="number" variant="underlined"></v-text-field>
                  <v-text-field label="Nascido em" type="date" variant="underlined"></v-text-field>
                  <v-text-field label="Origem" variant="underlined"></v-text-field>
                  <v-text-field label="Classe" variant="underlined"></v-text-field>
                  <v-select :items="items" label="Prestigio" variant="underlined"></v-select>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn prepend-icon="mdi-content-save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <pre>
    {{ player.$state }}
  </pre>
</template>

<style scoped></style>
