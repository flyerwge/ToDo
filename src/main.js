import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'dayjs'
import './assets/index'

const app = createApp(App)

app.config.globalProperties.dayjs = dayjs
var objectSupport = require("dayjs/plugin/objectSupport");
dayjs.extend(objectSupport);

app.use(store).use(router).mount('#app')
