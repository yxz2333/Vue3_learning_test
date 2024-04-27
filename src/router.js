import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Content from './pages/article/SMASH.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/content', name: 'Content', component: Content }
    ]
})

export default router // 导出模块