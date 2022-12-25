<script lang="ts" setup>
import { toFormValidator } from '@vee-validate/zod'
import date from 'date-and-time'
import { useField, useForm } from 'vee-validate'
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import type * as zod from 'zod'

import { CharacterSchema } from '@/schemas'
import type { TypeJobSchema } from '@/utils'
import { list } from '@/utils'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const { handleSubmit } = useForm<zod.infer<typeof CharacterSchema>>({
  validationSchema: toFormValidator(CharacterSchema),
  initialValues: {
    age: 18,
    attributes: { agility: 1, intelligence: 1, presence: 1, strength: 1, vitality: 1 },
    born: date.format(date.addYears(new Date(), -18), 'YYYY-MM-DD'),
    defense: 0,
    expertises: [],
    inventory: { slots: { used: 0, total: 10 }, items: [] },
    job: { main: list.jobs[0].main, specialization: '' },
    level: 0,
    name: '',
    origin: '',
    prestige: 1,
    protection: [],
    resistance: [],
    rituals: [],
    stats: {
      life: { current: 0, total: 1 },
      mana: { current: 0, total: 1 },
      sanity: { current: 0, total: 1 }
    }
  }
})

const { xs, sm, md, lg } = useDisplay()

//------------------------------------------------------------------------------------------------

function helpUseField<T>(field: string) {
  const { value, errorMessage, setValue } = useField<T>(field)
  return { in: value, setValue, errorMessage }
}

const selectedJob = ref<TypeJobSchema>(list.jobs[0])

const name = helpUseField<string>('name')
const age = helpUseField<number>('age')
const born = helpUseField<string>('born')
const prestige = helpUseField<string>('prestige')
const origin = helpUseField<string>('origin')
const jobMain = helpUseField<string>('job.main')
const jobSpecialization = helpUseField<string>('job.specialization')

//------------------------------------------------------------------------------------------------

const lifeCurrent = helpUseField<number>('stats.life.current')
const lifeTotal = helpUseField<number>('stats.life.total')
const sanityCurrent = helpUseField<number>('stats.sanity.current')
const sanityTotal = helpUseField<number>('stats.sanity.total')
const manaCurrent = helpUseField<number>('stats.mana.current')
const manaTotal = helpUseField<number>('stats.mana.total')

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
const onSubmit = handleSubmit((form) => {
  console.log(form)
})

//------------------------------------------------------------------------------------------------
//  Vue Hooks
//------------------------------------------------------------------------------------------------
watch(born.in, (v) => age.setValue(new Date().getFullYear() - new Date(v).getFullYear()))
watch(age.in, (v) => born.setValue(date.format(date.addYears(new Date(), -v), 'YYYY-MM-DD')))
watch(selectedJob, (v) => [
  jobMain.setValue(v.main),
  jobSpecialization.setValue(v.specialization[0])
])
</script>

<template>
  <v-app-bar app>
    <v-icon class="ml-4">mdi-account-multiple-plus</v-icon>
    <v-app-bar-title>Adicionar novo personagem </v-app-bar-title>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <v-row justify="center">
        <v-col sm="12" md="10" lg="7">
          <v-form @submit.prevent="onSubmit">
            <v-card prepend-icon="mdi-information" class="mb-4">
              <template v-slot:title> Informações gerais </template>
              <v-divider class="my-2"></v-divider>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name.in.value"
                      :error-messages="name.errorMessage.value"
                      prepend-inner-icon="mdi-account-box-multiple"
                      label="Nome"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-combobox
                      v-model="selectedJob"
                      :error-messages="jobMain.errorMessage.value"
                      :items="list.jobs"
                      prepend-inner-icon="mdi-book-variant"
                      label="Classes"
                      variant="solo"
                      hide-selected
                      item-title="main"
                    ></v-combobox>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-combobox
                      v-model="jobSpecialization.in.value"
                      :disabled="selectedJob.main === ''"
                      :error-messages="jobSpecialization.errorMessage.value"
                      :items="selectedJob.specialization"
                      prepend-inner-icon="mdi-file-tree"
                      label="Sub classes"
                      variant="solo"
                    ></v-combobox>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-combobox
                      v-model="origin.in.value"
                      :error-messages="origin.errorMessage.value"
                      :items="list.origins"
                      prepend-inner-icon="mdi-leaf-circle"
                      label="Origens"
                      variant="solo"
                    ></v-combobox>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-text-field
                      v-model="born.in.value"
                      :error-messages="born.errorMessage.value"
                      prepend-inner-icon="mdi-account-question"
                      label="Nascido em"
                      type="date"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-text-field
                      v-model.number="age.in.value"
                      :error-messages="age.errorMessage.value"
                      prepend-inner-icon="mdi-account-question"
                      label="Idade"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : sm ? 6 : 4">
                    <v-combobox
                      v-model.number="prestige.in.value"
                      :error-messages="prestige.errorMessage.value"
                      :items="[1, 2, 3, 4]"
                      prepend-inner-icon="mdi-account-tie"
                      label="Prestigio"
                      variant="solo"
                    ></v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <v-card prepend-icon="mdi-note-text" class="mb-4">
              <template v-slot:title> Status </template>
              <v-divider class="my-2"></v-divider>
              <v-container>
                <v-row>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="lifeCurrent.in.value"
                      :error-messages="lifeCurrent.errorMessage.value"
                      prepend-inner-icon="mdi-heart-half-full"
                      label="Vida atual"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="lifeTotal.in.value"
                      :error-messages="lifeTotal.errorMessage.value"
                      prepend-inner-icon="mdi-heart"
                      label="Vida total"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="sanityCurrent.in.value"
                      :error-messages="sanityCurrent.errorMessage.value"
                      prepend-inner-icon="mdi-head-snowflake-outline"
                      label="Sanidade atual"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="sanityTotal.in.value"
                      :error-messages="sanityTotal.errorMessage.value"
                      prepend-inner-icon="mdi-head-snowflake"
                      label="Sanidade total"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="manaCurrent.in.value"
                      :error-messages="manaCurrent.errorMessage.value"
                      label="Pontos de esforços atuais"
                      prepend-inner-icon="mdi-battery-outline"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                  <v-col :cols="xs ? 12 : 6">
                    <v-text-field
                      v-model.number="manaTotal.in.value"
                      :error-messages="manaTotal.errorMessage.value"
                      label="Pontos de esforços totais"
                      prepend-inner-icon="mdi-battery"
                      type="number"
                      variant="solo"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>

            <v-card prepend-icon="mdi-one-up" class="mb-4">
              <template v-slot:title> Atributos </template>
              <v-divider class="my-2"></v-divider>
              <v-container>
                <v-row>
                  <v-col :cols="xs ? 12 : 6"></v-col>
                </v-row>
              </v-container>
            </v-card>

            <v-card prepend-icon="mdi-brain" class="mb-4">
              <template v-slot:title> Pericias </template>
              <v-divider class="my-2"></v-divider>
              <v-card-text></v-card-text>
            </v-card>

            <v-card prepend-icon="mdi-sun-wireless" class="mb-4">
              <template v-slot:title> Rituais </template>
              <v-divider class="my-2"></v-divider>
              <v-card-text></v-card-text>
            </v-card>

            <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  variant="plain"
                  color="success"
                  prepend-inner-icon="mdi-database"
                  type="submit"
                >
                  Salvar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped></style>
