import './assets/main.css'

import { createApp } from 'vue'
// ! Formkit
import { plugin , defaultConfig } from '@formkit/vue'
import App from './App.vue'
import router from './router'
// ! Formkit
import config from '../formkit.config'

const app = createApp(App)

app.use(router)
// ! Formkit
app.use(plugin,defaultConfig(config))

app.mount('#app')
