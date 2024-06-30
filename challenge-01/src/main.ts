import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import '@/assets/styles/reset.css'

createApp(App).use(router).mount('#app')
