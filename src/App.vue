<template>
  <div>
    <nav>
      <router-link to="/">主页</router-link> <!-- router-link不会重新刷新路由 -->
      |
      <router-link to="/hello">Hello</router-link>
    </nav>

    <router-view></router-view><!-- 显示路由 -->

    <vue-live2d :model="modelPath" id="live2d" /><!-- 直接用的live2d包 -->

  </div>
</template>


<script setup>
import { Cursor } from "./components/Cursor/MouseCursor"
import vueLive2d from 'vue-live2d' // 装的live2d包

const cursor = () => new Cursor()
cursor()
</script>


<style scoped>
a {
  font-weight: bolder;
}

nav {
  font-size: xx-large;
}

#live2d {
  /* live2d自带了canvas，直接放左下角就行 */
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>



<!--
【Vue Router客户端路由的核心基础知识】
https://www.bilibili.com/video/BV1je4y1w7XS?vd_source=5d1c5f194b15d06042627ef499632f97
09:11
-->