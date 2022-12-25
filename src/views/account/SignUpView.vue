<script setup lang="ts">
import { toFormValidator } from '@vee-validate/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type * as zod from 'zod'

import firebase from '@/firebase'
import { ROUTE_TO } from '@/router'
import { AccountForm } from '@/schemas/player'
import { usePlayerStore } from '@/stores'
import { helpUseField } from '@/utils'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const router = useRouter()
const player = usePlayerStore()

const errorMessage = ref('')
const snackbar = ref(false)

const { handleSubmit } = useForm<zod.infer<typeof AccountForm.SingUpSchema>>({
  validationSchema: toFormValidator(AccountForm.SingUpSchema),
  initialValues: { email: '', password: '', passwordCheck: '' }
})

const email = helpUseField<string>('email')
const password = helpUseField<string>('password')
const passwordCheck = helpUseField<string>('passwordCheck')

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
const onSubmit = handleSubmit(async (form) => {
  createUserWithEmailAndPassword(firebase.auth, form.email, form.password)
    .then(async ({ user }) => {
      await player.authStore({
        uid: user.uid,
        email: user.email!,
        displayName: user.displayName!,
        photoURL: user.photoURL!,
        refreshToken: user.refreshToken!,
        isAdministrator: false
      })

      router.push(ROUTE_TO.PROFILE)
    })
    .catch(({ code, message }) => {
      console.log('[firebase]', code)
      snackbar.value = true
      errorMessage.value = message
    })
})
</script>

<template>
  <v-snackbar v-model="snackbar" color="error">{{ errorMessage }}</v-snackbar>

  <v-container class="fill-height" fluid>
    <v-row class="fill-height" justify="center" align="center">
      <v-col sm="8" md="6" lg="4">
        <v-form @submit.prevent="onSubmit">
          <v-card>
            <v-card-title>
              <v-icon size="small">mdi-account-plus</v-icon>
              <span class="ml-2">Registrar-se</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                v-model="email.in.value"
                :error-messages="email.errorMessage.value"
                prepend-icon="mdi-account"
                label="Email"
                variant="solo"
              ></v-text-field>
              <v-text-field
                v-model="password.in.value"
                :error-messages="password.errorMessage.value"
                prepend-icon="mdi-lock"
                label="Senha"
                type="password"
                variant="solo"
              ></v-text-field>
              <v-text-field
                v-model="passwordCheck.in.value"
                :error-messages="passwordCheck.errorMessage.value"
                prepend-icon="mdi-lock-check"
                label="Confirme a senha"
                type="password"
                variant="solo"
              ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn variant="plain" prepend-icon="mdi-database" type="submit"> Salvar </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
