import { createApp } from 'vue'

import 'normalize.css'
import './assets/css/index.less'

import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
