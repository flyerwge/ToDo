import { createApp } from 'vue'
import SvgIcon from '../components/SvgIcon.vue' // svg组件

const app = createApp({})

//注册到全局
app.component('svg-icon', SvgIcon);
// Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)