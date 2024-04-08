import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import HelloWorld from './views/HelloWorld.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/hello', name: 'HelloWorld', component: HelloWorld },
    ]
})

export default router // 导出模块