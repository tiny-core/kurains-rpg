<script setup lang="ts">
import { useAccountStore } from '@/stores'

//------------------------------------------------------------------------------------------------
//  Variables
//------------------------------------------------------------------------------------------------
const accountStore = useAccountStore()
</script>

<template>
  <v-footer class="text-center d-flex flex-column" app>
    <v-row v-if="!accountStore.isConnected" no-gutters>
      <v-col cols="12">
        <v-btn
          :disabled="accountStore.googlePopupIsOpen"
          :loading="accountStore.googlePopupIsOpen"
          density="compact"
          prepend-icon="mdi-google"
          variant="plain"
          @click="accountStore.signInWithGoogleAccount"
        >
          Google
        </v-btn>
        <!-- <v-btn density="compact" prepend-icon="mdi-account-plus" variant="plain">
          Registrar-se
        </v-btn>
        <v-btn density="compact" prepend-icon="mdi-login" variant="plain"> Login </v-btn> -->
      </v-col>
      <v-col class="my-4" cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <small class="text-medium-emphasis">
          &copy; 2023 | Powered by
          <a href="https://github.com/tiny-core" target="_blank">Tiny Core</a> | Designer DaniArts |
          All rights reserved
        </small>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped></style>
