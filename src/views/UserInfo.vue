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
        <p class="username">{{ this.user.realName }}</p>
        <p class="phone">账号: {{ this.user.userID }}</p>
      </div>
    </div>

    <ul class="menu">
      <li><span>我的服务</span></li>
      <li><span>我的预约</span></li>
      <li><span>我的医生</span></li>
      <li><span>问诊订单</span></li>
      <li><span>商城订单</span></li>
      <li><span @click="toUpdatePWD()">修改密码</span></li>
      <li><span @click="logout()">退出登录</span></li>
    </ul>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userID: "",
        realName: "",
      },
    };
  },
  methods: {
    //TODO:修改密码
    toUpdatePWD() {
      this.$router.push({ path: "/updatepwd" });
    },
    toBack() {
      this.$router.back();
    },
    navigateTo(route) {
      this.$router.push(route);
    },
    getUserInfo() {
      this.user.userID = sessionStorage.getItem("userID");
      this.user.realName = sessionStorage.getItem("realName");
      this.user.birthday = sessionStorage.getItem("birthday");
      this.user.identityCard = sessionStorage.getItem("identityCard");
      //去除双引号
      this.user.realName = this.user.realName.replace(/^\"|\"$/g, "");
      this.user.birthday = this.user.birthday.replace(/^\"|\"$/g, "");
      this.user.identityCard = this.user.identityCard.replace(/^\"|\"$/g, "");
    },
    logout() {
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
  components: {
    Footer,
  },
  created() {
    this.getUserInfo();
  },
};
import Footer from "@/components/Footer.vue";
</script>
<style src="@/assets/css/UserInfo.css" scoped></style>
