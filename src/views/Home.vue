<template>
    <!-- HTML -->
    <div>
        <h1>{{ title }}</h1>

        <p>{{ count }}</p>
        <button @click="count_increase()">count++</button>

        <h2>{{ message }}</h2>
        <input v-model="input_message" @keypress="show_message(); add_message_to_list()" />
        <!-- 输入的赋值到input_message变量 -->
        <button @click="show_message(); add_message_to_list()">show it</button>
        <p>直接显示： <input v-model="message" /></p> <!-- 输入的直接赋值message，不需要函数监听 -->

        <ul>
            <li v-for="(item, index) in message_list" :key="index"> <!-- key来绑定键 -->
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
// JavaScript
import { ref } from "vue"


const title = ref("TEST")   // ref 响应式变量: Vue 会追踪它的变化，并在变化时自动更新 DOM

const count = ref(0)
const count_increase = () => {
    count.value++             // 更改响应式变量的value属性
}

const message = ref(null)
const input_message = ref(null)
const show_message = () => {
    message.value = input_message.value
}

const message_list = ref([])
const add_message_to_list = () => {
    message_list.value.push(input_message.value)
}
</script>


<style scoped>
/* CSS */
</style>
