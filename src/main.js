import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './components/Cursor/MouseCursor.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
