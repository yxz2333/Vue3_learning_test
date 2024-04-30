<template>
    <el-row>

        <el-col :span='19'>
            <div class="main-article">
                <MdPreview :editorId="id" :modelValue="article.text" :theme="article.theme"
                    class="main-article-content" />
            </div>
        </el-col>

        <el-col :span="1"></el-col>

        <el-col :span='4'>
            <div class="markdown-right-move" ref='mdRightBox'>
                <div class="markdown-right-box">
                    <MdCatalog :editorId="id" :scrollElement="scrollElement" class='markdown-right-content' />
                </div>
            </div>
        </el-col>

    </el-row>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, watch } from "vue"
import { MdPreview, MdCatalog } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'


// 定义传入变量
const props = defineProps({
    msg: String,
});

const id = 'markdown';
const article = reactive({
    text: props.msg,
    theme: 'light'
});

// rightBox
const scrollElement = document.documentElement;

const mdRightBox = ref(null)   // 使用ref获取DOM元素的引用，绑定上面的 ref = 'mdRightBox'
const handleScroll = () => {   // 处理滚动事件
    if (mdRightBox.value) {
        // let topDistance = box.value.getBoundingClientRect().top; // getBoundingClientRect() 返回一个元素的大小以及其相对于视口的位置信息
        let viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 兼容旧版本
        mdRightBox.value.style.top = `${window.scrollY + viewportHeight * 0.05}px`
    }
};
onMounted(() => {          // 在组件挂载后添加滚动事件监听器
    window.addEventListener('scroll', handleScroll)
});
onBeforeUnmount(() => {    // 在组件卸载前移除滚动事件监听器
    window.removeEventListener('scroll', handleScroll)
});
</script>


<style scoped>
.main-article {
    transition: all 0.2s ease-in;
    position: relative;
    margin: 3% 10% 0 5%;
    background-color: white;
}

.main-article:hover {
    transform: translate(0, -3px);
    box-shadow: 15px -5px 40px rgba(0, 0, 0, 0.1);
}

.main-article-content {
    margin: 0 0 0 2%;
}

.markdown-right-move {
    position: relative;
    right: 30%;
    top: 2%;
}

.markdown-right-box {
    transition: all 0.2s ease-in;
    background-color: white;
    border-radius: 7%;
    font-size: 80%;
}

.markdown-right-box:hover {
    transform: translate(0, -3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.markdown-right-content {
    margin: 5%;
}
</style>

<script>
export default {
    name: 'Article'
}
</script>