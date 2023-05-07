<template>
  <div class="home">
    <div class="navbar">展示</div>
    <div class="main">
      <h3>效果演示</h3>
      <!-- static-effect静态演示 -->
      <StaticEffect has-border visible/>
      <StaticEffect visible/>
      <h3>按钮中使用</h3>
      <button class="use_loading_btn" @click="commit">
        <StaticEffect :visible="loading"/>
        <template v-if="!loading">提交</template>
      </button>

      <h3>函数调用</h3>
      <button class="use_loading_btn" @click="useLoading">点击调用</button>
      <h3>下滑调用</h3>
    </div>
  </div>
</template>

<script>
import StaticEffect from '@/components/StaticEffect.vue'
import { showLoading } from '@/utils/loading.js'
export default {
  components: {
    StaticEffect
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    useLoading () {
      console.log('使用loading')
      showLoading()
    },
    async commit () {
      // 不可重复点击
      if (this.loading === true) return
      this.loading = true
      // 可以发起ajax请求
      await new Promise((resolve) => {
        setTimeout(() => {
          this.loading = false
          resolve()
        }, 2000)
      })
    }
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
  box-shadow: 0px 1px 5px #ccc;
}
.main{
  height: 1000px;
  padding: 16px 16px 0;
}
h3{
  margin: 10px 0;
}
.use_loading_btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #5c6bc0;
  border: 1px solid #ccc;
  font-size: 16px;
  color: #fff;
  border-radius: 20px;
}
</style>
