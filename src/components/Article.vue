<template>
    <div class="container">
        <div class="mainArticle">
            <MdPreview :editorId="id" :modelValue="article.text" :theme="article.theme" />
        </div>
    </div>
    <div class="markdown-right">
        <MdCatalog :editorId="id" :scrollElement="scrollElement" />
    </div>
</template>
<script setup>
import { reactive } from "vue"
import { useRouter } from 'vue-router'
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'


// 定义传入变量
const props = defineProps({
    msg: String,
});



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
.container {
    margin: 4% 15% 0 0;
    min-width: 70vh;
    border-radius: 10px;
}

.mainArticle {
    transition: all 0.2s ease-in;
    position: relative;
    margin: 0 10% 0 10%;
}

.mainArticle:hover {
    transform: translate(0, -3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.markdown-right {
    font-size: 80%;
    position: absolute;
    right: 20%;
    top: 5%;
}
</style>

<script>
export default {
    name: 'Article'
}
</script>