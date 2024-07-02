<script setup lang="ts">
// scale 方案 自适应大屏 主要存在两个问题
// 当缩放比例过大时候，字体会有一点点模糊，就一点点。
// 当缩放比例过大时候，事件热区会偏移。
const handleScreenAuto = ():void => {
  const designWidth = 1920  //设计稿宽度
  const designHeight = 1080 // 设计稿高度
  const clientWidth = document.documentElement.clientWidth  //客户端宽度
  const clientHeight = document.documentElement.clientHeight // 客户端高度
  //根据屏幕的变化适配的比例
  const scale = clientWidth / clientHeight < designWidth / designHeight ? (clientWidth / designWidth) : (clientHeight / designHeight);
    // 客户端宽/客户端高 小于 设计稿宽/设计稿高  缩放比例等于客户端宽除以设计稿宽
  (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
}
handleScreenAuto()
window.onresize = handleScreenAuto()
</script>

<template>
  <!--  <div class="wrapper" :style="{maxWidth:'750px'}">-->
  <!--    <div class="imagelist">-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--      <div class="imagediv"></div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="screen-root">
    <div class="screen" id="screen">

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
  background-color: red;
}

.imagelist {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.imagediv {
  background-color: blue;
  width: 100px;
  height: 100px;
}

.screen-root {
  height: 100%;
  width: 100%;

}
.screen {
  display: inline-block;
  width: 1920px;  //设计稿的宽度
  height: 960px;  //设计稿的高度
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
}

</style>
