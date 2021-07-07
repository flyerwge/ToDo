import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import './assets/index'
import ObjectSupport from 'dayjs/plugin/objectSupport'

const app = createApp(App)

app.config.globalProperties.dayjs = dayjs
dayjs.extend(ObjectSupport)


app.use(store).use(router).mount('#app')
