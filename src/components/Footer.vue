<template>
  <!--app导航栏页脚-->
  <!--语义化标签，作用和div一样，看到标签名就知道显示的内容是什么-->
  <footer>
    <ul>
      <!-- 事件绑定 -->
      <li @click="toHome()">
        <i class="fa fa-hospital-o" aria-hidden="true"></i>
        <p>云医院</p>
      </li>
      <li @click="toShop()">
        <i class="fa fa-opencart" aria-hidden="true"></i>
        <p>商城</p>
      </li>
      <li @click="toSearch()">
        <i class="fa fa-search" aria-hidden="true"></i>
        <p>发现</p>
      </li>
      <li @click="toUserInfo()">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p>我的</p>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      test: sessionStorage.getItem("userID"),
      isLogin: this.test != null ? true : false,
      //组件界面定义变量
    };
  },
  created() {
    this.isLogin = this.test != null ? true : false;
  },
  methods: {
    //组件界面使用所有的方法
    toHome() {
      //使用路由跳转至首页
      this.$router.push({ path: "/" }).catch((e) => {});
    },
    toUserInfo() {
      if (this.isLogin) {
        console.log("我要去个人信息界面！");
        console.log(this.test);
        this.$router.push({ path: "/userInfo" }).catch((e) => {});
      } else {
        console.log(this.test);
        console.log("我要去登录界面！");
        this.$router.push({ path: "/login" }).catch((e) => {});
      }
    },
    toShop() {
      this.$router.push({ path: "/shop" }).catch((e) => {});
    },
    toSearch() {
      this.$router.push({ path: "/search" }).catch((e) => {});
    },
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  height: 14.2vw;
  /*视口单位 viewport*/
  background-color: #e9e9e9;
  position: fixed;
  left: 0;
  bottom: 0;
  /*使用坐标定位*/
  border-top: 0.3vw solid #e9e9e9;
  box-sizing: border-box;
}

footer ul {
  width: 100%;
  height: 14.2vw;
  display: flex;
  /*弹性布局*/
  align-items: center;
  justify-content: space-around;
}

footer ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  color: #666;
}
</style>
