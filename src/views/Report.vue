<template>
  <div>
    <i class="fa fa-angle-left fa-2x" @click="toBack()"></i>
    <h1>这是报告的内容板块</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toBack() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
