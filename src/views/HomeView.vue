<template>
  <div class="home">
    <div class="navbar">home</div>
    <div class="main">
      <h3>效果演示</h3>
      <!-- static-effect静态演示 -->
      <StaticEffect has-border/>
      <StaticEffect />
      <h3>函数调用</h3>
      <button class="use_loading_btn">点击调用</button>
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
h3{
  margin: 10px 0;
}
.use_loading_btn{
  width: 100px;
  height: 40px;
  background-color: #5c6bc0;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
}
</style>
