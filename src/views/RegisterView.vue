<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row class="fill-height" justify="center" align="center">
        <v-col sm="8" md="6" lg="4">
          <v-card>
            <v-card-title>
              <v-icon size="small">mdi-login</v-icon>
              <span class="ml-2">Login</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
                <v-text-field label="Nome de usuário" variant="solo"></v-text-field>
                <v-text-field label="Email" variant="solo"></v-text-field>
                <v-text-field label="Senha" type="password" variant="solo"></v-text-field>
                <v-text-field label="Repetir Senha" type="password" variant="solo"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                variant="plain"
                prepend-icon="mdi-login-variant"
                @click="router.push({ name: 'home' })"
                >Login</v-btn
              >
              <v-btn variant="plain" prepend-icon="mdi-account-plus">Cadastrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
