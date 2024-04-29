<template>
  <div id="app">
    <nav>
      <router-link to="/">Welcome</router-link>
      |
      <router-link to="/content">SMASH</router-link>
    </nav>

    <div class="container">
      <el-row>

        <el-col :span="20">
          <router-view />
        </el-col>

        <el-col :span="4">
          <Right />
        </el-col>

      </el-row>
    </div>

    <vue-live2d :model="modelPath" id="live2d" />
  </div>
</template>

<script setup>
import { Cursor } from './api/Cursor/MouseCursor'
import vueLive2d from 'vue-live2d'
import Right from './components/RIght.vue'
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
  position: fixed;
  bottom: 0;
  left: 0;
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;
}
</style>