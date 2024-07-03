<template>
  <div class="profile-page">
    <header class="header">
      <i class="fa fa-angle-left fa-2x" @click="toBack()"></i>
      <h1 class="title">个人中心</h1>
    </header>
    <div class="profile-info">
      <div class="avatar">
        <i class="fa fa-user-md fa-2x" aria-hidden="true"></i>
      </div>
      <div class="user-details">
        <p class="username">{{ user.name }}</p>
        <p class="phone">账号: {{ user.phone }}</p>
      </div>
    </div>
    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.label"
        @click="navigateTo(item.route)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
        <i class="arrow">→</i>
      </li>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "黄药师",
        phone: "156****8947",
        avatar: "path/to/avatar.jpg", // Replace with actual path to avatar image
      },
      menuItems: [
        { label: "我的预约", icon: "icon-appointment", route: "/appointment" },
        { label: "我的服务", icon: "icon-service", route: "/service" },
        { label: "我的医生", icon: "icon-doctor", route: "/doctor" },
        {
          label: "问诊订单",
          icon: "icon-consultation-order",
          route: "/consultation-order",
        },
        { label: "商城订单", icon: "icon-store-order", route: "/store-order" },
        { label: "退出登录", icon: "icon-logout", route: "/logout" },
      ],
      bottomNavItems: [
        {
          label: "云医院",
          icon: "icon-cloud-hospital",
          route: "/cloud-hospital",
        },
        { label: "商城", icon: "icon-store", route: "/store" },
        { label: "消息", icon: "icon-messages", route: "/messages" },
        { label: "个人中心", icon: "icon-profile", route: "/profile" },
      ],
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  components: {
    Footer,
  },
};
import Footer from "@/components/Footer.vue";
</script>

<style src="@/assets/css/UserInfo.css" scoped></style>
