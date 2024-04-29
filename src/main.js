import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import './api/Cursor/MouseCursor.css'
import 'element-plus/dist/index.css'
import router from './router'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
