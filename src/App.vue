<template>
  <div id="app">
    <nav>
      <router-link to="/">Welcome</router-link>
      |
      <router-link to="/content">SMASH</router-link>
    </nav>

    <router-view></router-view>

    <vue-live2d :model="modelPath" id="live2d" />
  </div>
</template>

<script setup>
import { Cursor } from './components/Cursor/MouseCursor'
import vueLive2d from 'vue-live2d'
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
</style>