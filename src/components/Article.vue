<template>
    <div class="mainArticle">
        <MdPreview :editorId="id" :modelValue="article.text" :theme="article.theme" />
    </div>
    <div class="right">
        <MdCatalog :editorId="id" :scrollElement="scrollElement" />
    </div>
</template>
<script setup>
// 定义传入变量
const props = defineProps({
    msg: String,
});

import { reactive } from "vue"
import { useRouter } from 'vue-router'
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const router = useRouter()
const goToHomePage = () => {
    router.push({ name: 'Home' })
}

const id = 'markdown';
const article = reactive({
    text: props.msg,
    theme: 'light'
});
const scrollElement = document.documentElement;
</script>


<style scoped>
.mainArticle {
    display: grid;
    justify-content: center;
    margin: 0 20% 0 10%;
}

.right {
    font-size: 90%;
    position: fixed;
    right: 10%;
    top: 10%;
}
</style>

<script>
export default {
    name: 'Article'
}
</script>