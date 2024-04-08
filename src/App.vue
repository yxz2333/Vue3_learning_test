<template>
  <div>
    <nav>
      <router-link to="/">主页</router-link> <!-- router-link不会重新刷新路由 -->
      |
      <router-link to="/hello">Hello</router-link>
    </nav>

    <router-view></router-view><!-- 显示路由 -->

  </div>
</template>


<script setup>
import { Cursor } from "./components/Cursor/MouseCursor"
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
</style>



<!--
【Vue Router客户端路由的核心基础知识】
https://www.bilibili.com/video/BV1je4y1w7XS?vd_source=5d1c5f194b15d06042627ef499632f97
09:11
-->