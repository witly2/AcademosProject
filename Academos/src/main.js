import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(createPinia())
app.use(router)
const clientId='607918405382-bojerieb8l4hac8ekngppbscbjs2h6jt.apps.googleusercontent.com'
app.use(vue3GoogleLogin, {
  clientId: clientId
})

app.mount('#app')
