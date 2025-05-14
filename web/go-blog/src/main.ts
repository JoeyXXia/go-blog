import 'normalize.css'
import './assets/css/index.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import registerIcons from '@/utils/register-icons'

const app = createApp(App)
app.use(registerIcons)
app.use(createPinia())
app.use(router)

app.mount('#app')
