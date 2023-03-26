<template>
  <div class="home">
    <div class="navbar">home</div>
    <div class="main">
      <h3>效果演示</h3>
      <!-- static-effect静态演示 -->
      <StaticEffect />
      <!-- <h3>函数调用模式</h3> -->
      <!-- <button class="">点击调用</button> -->
    </div>
  </div>
</template>

<script>
import StaticEffect from '@/components/StaticEffect.vue'
export default {
  components: {
    StaticEffect
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.main{
  padding: 16px 16px 0;
}
</style>
