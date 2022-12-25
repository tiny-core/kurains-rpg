<script setup lang="ts">
import { toFormValidator } from '@vee-validate/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type * as zod from 'zod'

import { ERROR_CODE, firebase } from '@/firebase'
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

const { handleSubmit } = useForm<zod.infer<typeof AccountForm.SignInSchema>>({
  validationSchema: toFormValidator(AccountForm.SignInSchema),
  initialValues: { email: '', password: '' }
})

const email = helpUseField<string>('email')
const password = helpUseField<string>('password')

//------------------------------------------------------------------------------------------------
//  Actions
//------------------------------------------------------------------------------------------------
const onSubmit = handleSubmit((form) => {
  signInWithEmailAndPassword(firebase.auth, form.email, form.password)
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
      switch (code) {
        case ERROR_CODE.AUTH_USER_NOT_FOUND:
          errorMessage.value = 'Não foi possível encontrar esse usuário'
          break
        case ERROR_CODE.AUTH_WRONG_PASSWORD:
          errorMessage.value = 'A senha digitada está incorreta'
          break
        case ERROR_CODE.AUTH_TOO_MANY_REQUESTS:
          errorMessage.value =
            'O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login mal sucedidas. Você pode restaurá-lo imediatamente redefinindo sua senha ou pode tentar novamente mais tarde'
          break
        default:
          errorMessage.value = message
      }

      snackbar.value = true
    })
})
</script>

<template>
  <v-main>
    <v-snackbar v-model="snackbar" color="error"> {{ errorMessage }} </v-snackbar>

    <v-container class="fill-height" fluid>
      <v-row class="fill-height" justify="center" align="center">
        <v-col sm="8" md="6" lg="4">
          <v-form @submit.prevent="onSubmit">
            <v-card>
              <v-card-title>
                <v-icon size="small">mdi-login</v-icon>
                <span class="ml-2">Login</span>
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
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <!-- <v-btn variant="plain" prepend-icon="mdi-lock-question">Recuperar</v-btn> -->
                <v-spacer></v-spacer>

                <v-btn variant="plain" prepend-icon="mdi-login-variant" type="submit">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
