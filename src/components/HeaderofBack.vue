<template>
  <el-header class="header">
    <div class="header-title">体检报告管理系统</div>
    <div class="header-doctor">医生：{{ doctorName }}</div>
  </el-header>
</template>

<script>
export default {
  props: {
    doctorName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  color: #002d62;
  font-size: 20px;
  font-weight: bold;
}
.header-doctor {
  color: #002d62;
  font-size: 12px;
}
</style>
