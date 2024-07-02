<template>
  <div class="admin-panel">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div class="logo">
        <!-- 放置你的Logo -->
        <i class="fa fa-hospital-o" aria-hidden="true"> 医院后台管理界面</i>
      </div>
      <ul class="menu">
        <li>
          <router-link to="/dashboard">
            <i class="icon-dashboard"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/users">
            <i class="icon-users"></i>
            <span>Users</span>
          </router-link>
        </li>
        <li>
          <router-link to="/products">
            <i class="icon-products"></i>
            <span>Products</span>
          </router-link>
        </li>
        <!-- 可根据需求添加更多菜单项 -->
      </ul>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
  // 可以在这里添加组件的逻辑和数据处理
};
</script>

<style src="@/assets/css/BackStage.css" scoped></style>
<style></style>
