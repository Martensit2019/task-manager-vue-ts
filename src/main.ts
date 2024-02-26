import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {loadState, saveState} from './helpers/storage'
import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'

loadState()

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'visible' ? loadState() : saveState()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
