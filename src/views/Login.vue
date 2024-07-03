<template>
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="toHome"></i>
      <p></p>
      <div></div>
    </header>
    <h1>{{ title }}</h1>
    <section>
      <div class="input-box">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <input
          type="text"
          v-model="user.username"
          placeholder="输入手机号"
          style="position: relative; left: 1.5vw"
        />
      </div>
      <div class="input-box">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input
          type="password"
          v-model="user.password"
          placeholder="输入登录密码"
          style="position: relative; left: 15px"
        />
      </div>
      <div class="reg-box">
        <p @click="toRegister()">注册</p>
        <p @click="toUpdate()">忘记密码？</p>
      </div>
      <div class="button-box" @click="login()">登录</div>
    </section>
    <footer>
      <div>
        <div class="line"></div>
        <p>有疑问请联系客服</p>
        <div class="line"></div>
      </div>
      <p>4008-889-333</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "shou体检预约-登录", //title数据是可以从服务器请求获得
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" }).catch((e) => {});
    },
    toUpdate() {
      this.$router.push({ path: "updatepwd" }).catch((e) => {});
    },
    login() {
      //字段检测用户名不为空
      if (this.user.username == "") {
        this.$message({
          showClose: true, //是否显示关闭按钮
          message: "用户id不能为空",
          type: "warning", //类型
          onClose: () => {
            console.log("关闭");
          },
        });
        return;
      }
      //字段检测密码不为空
      if (this.user.password == "") {
        this.$message({
          showClose: true, //是否显示关闭按钮
          message: "用户密码不能为空",
          type: "warning", //类型
          onClose: () => {
            console.log("关闭");
          },
        });
        return;
      }
      //登录接口
      let url = "user/login";
      this.$axios
        .post(url, this.user)
        .then((response) => {
          //登录成功，将登录用户名存储到sessionStorage中
          sessionStorage.setItem("token", JSON.stringify(response.data.data));
          this.getUserInfo();
          this.$message({
            showClose: false, //是否显示关闭按钮
            message: "登录操作成功",
            duration: 1000,
            type: "success", //类型
            onClose: () => {
              this.$router.push({ path: "/" }).catch((e) => {});
            },
          });
        })
        .catch((e) => {
          console.log("出现错误了！");
          console.log(e);
        });
    },
    toRegister() {
      this.$router.push({ path: "/register" }).catch((e) => {});
    },
    getUserInfo() {
      let url = "/user/getByUserID";
      this.$axios({
        method: "post",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        params: {
          userID: this.user.username,
        },
      })
        .then((response) => {
          sessionStorage.setItem("realName", response.data.data.realName);
          sessionStorage.setItem("birthday", response.data.data.birthday);
          sessionStorage.setItem(
            "identityCard",
            response.data.data.identityCard
          );
          sessionStorage.setItem("userID", this.user.username);
        })
        .catch((e) => {
          console.log(e);
          console.log("出现错误了！");
        });
    },
  },
};
</script>

<style src="@/assets/css/Login.css" scoped></style>
<style></style>
