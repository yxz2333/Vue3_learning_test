<template>
    <div class="rightlistBox">
        <section>
            <div class="r1-head">
                <img src="/src/assets/images/FBeRycXwAAO3Sh.jpg" alt="" />
            </div>
        </section>
    </div>
</template>

<script setup>
</script>

<style scope>
.rightlistBox {
    position: relative;
}

.rightlistBox section {
    transition: all 0.2s ease-in;
    /* 为所有属性的变化提供了平滑过渡效果 */

    padding: 15px;
    /* 在元素的内容和边界之间设置了15像素的内边距 */

    position: relative;
    background: white;
    margin-bottom: 20px;
    border-radius: 5px;
}

.rightlistBox section:hover {
    transform: translate(0, -3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    /* 模糊效果的阴影，模拟光源位于元素上方的效果 */
}

.rightlistBox .r1-head {
    text-align: center;
    border-radius: 4px 4px 0 0;
    text-align: center;
    position: relative;

    /*
    box-shadow: inset 0 -70px 100px -50px rgba(0,0,0,.5);
    */
}

.rightlistBox .r1-head img {
    width: 100%;
    min-height: 100px;
}
</style>