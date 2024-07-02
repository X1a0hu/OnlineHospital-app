<template>
  <div>
    <header>
      <i class="fa fa-angle-left fa-2x" @click="toBack()"></i>
      <p></p>
      <div></div>
    </header>
    <h1>
      这是商城的内容板块
    </h1>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toBack() {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>