<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="toBack"></i>
      <p>修改密码</p>
      <div></div>
    </header>
    <div class="top-ban"></div>
    <table>
      <tr>
        <td>手机号</td>
        <td>
          <input type="text" v-model="user.userId" placeholder="请输入手机号" />
        </td>
      </tr>
      <tr>
        <td>新密码</td>
        <td>
          <input
            type="password"
            v-model="user.newPassword"
            placeholder="请输入新密码"
          />
        </td>
      </tr>
    </table>
    <div class="btn" @click="submit">完成</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userId: "",
        newPassword: "",
      },
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    //TODO:验证用户提交的数据是否正确
    submit() {
      //字段检测部分
      if (this.user.newPassword == "") {
        this.$message({
          showClose: true, //是否显示关闭按钮
          message: "新密码不能为空",
          type: "warning", //类型
          onClose: () => {
            console.log("关闭");
          },
        });
        return;
      }
      let url = "/user/updateUserPassword";
      this.$axios({
        method: "post",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        data: {
          username: this.user.userId,
          password: this.user.newPassword,
        },
      })
        .then((response) => {
          if (response.data.code == 200) {
            this.$router.push({ path: "/login" }).catch((e) => {});
            this.$message({
              showClose: false, //是否显示关闭按钮
              message: "修改成功!请先登录！",
              duration: 1000,
              type: "success", //类型
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style src="@/assets/css/Register.css" scoped></style>
<style scoped></style>
