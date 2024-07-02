<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <h1>您访问的页面不存在。</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  data() {
    return {}
  },
  components: {
    //注册子组件 使用名字：导入名字
    Footer,
  },
}
</script>
<style src="@/assets/css/Register.css" scoped></style>
<style scoped>
</style>