- [ ] 学习生命周期钩子的使用

### @... 事件监听指令
``@...="func1;func2;func3"``的形式来多加事件处理函数。
例如：``<input @keypress="function1; function2; function3" />``
***
<br>


### ref 响应式变量
Vue 会追踪它的变化，并在变化时自动更新 DOM。
当使用``ref``来定义一个变量时，这个变量会变成响应式的。
可将右值套上``ref()``，就定义成了``ref``，其本质是个对象。
***
<br>


### router 路由
1. 安装包``yarn add vue-router``

2. 创建路由配置文件``router.js``
以下为创建了两个路由``Home``,``HelloWorld``的配置文件代码：
```javascript
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
```

3. 在主文件``main.js``中引入路由配置
```javascript
import router from './router'
app.use(router)
```

4. 使用``<router-link>``进行导航（类似超链接）
例如：
```html
<router-link to="/">主页</router-link>
```

5. 使用``<router-view></router-view>``显示路由中的组件
在``App.vue``或其他布局组件中使用``<router-view>``作为路由组件的占位符。
***
<br>