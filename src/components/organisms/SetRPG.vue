<script lang="ts" setup>
import { toFormValidator } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { ref, watch } from 'vue'

import { RPGSchema } from '@/schemas'
import { type RPGData, useRPGStore } from '@/stores'
import { helpUseField } from '@/utils'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const prop = defineProps(['icon', 'updateId', 'variant', 'color', 'size'])
const dialog = ref(false)
const inLoading = ref(false)
const rpgStore = useRPGStore()
const { handleSubmit, handleReset } = useForm<RPGData>({
  validationSchema: toFormValidator(RPGSchema),
  initialValues: { name: '', description: '' }
})

//------------------------------------------------------------------------------------------------

const name = helpUseField<string>('name')
const description = helpUseField<string>('description')

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
const onSubmit = handleSubmit(async (data) => {
  inLoading.value = true

  // if (prop.updateId) await rpgStore.update(prop.updateId, data)
  // else await rpgStore.create(data)

  inLoading.value = false

  close()
})

function close() {
  dialog.value = false
  handleReset()
}

//------------------------------------------------------------------------------------------------
//  Vue hooks
//------------------------------------------------------------------------------------------------
watch(dialog, () => {
  if (prop.updateId) {
    name.setValue(rpgStore.documents[prop.updateId].name)
    description.setValue(rpgStore.documents[prop.updateId].description)
  }
})
</script>

<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ props }">
      <v-btn
        :size="prop.size"
        :variant="prop.variant"
        :color="prop.color"
        :prepend-icon="prop.icon"
        v-bind="props"
      >
        <slot />
      </v-btn>
    </template>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-form @submit.prevent="onSubmit">
            <v-card prepend-icon="mdi-controller" class="mb-4">
              <template v-slot:title>
                {{ prop.updateId ? 'Atualizar RPG' : 'Adicionar RPG' }}
              </template>
              <v-divider></v-divider>

              <v-card-item>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name.in.value"
                      :error-messages="name.errorMessage.value"
                      label="Nome"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="description.in.value"
                      :error-messages="description.errorMessage.value"
                      label="Descrição"
                      variant="solo"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-item>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="text" @click="close" :disabled="inLoading"> Fechar </v-btn>
                <v-btn variant="text" type="submit" :disabled="inLoading" :loading="inLoading">
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>

<style scoped></style>
