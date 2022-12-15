import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPersist from 'pinia-plugin-persist'

import { vuetify } from '@/plugins'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
