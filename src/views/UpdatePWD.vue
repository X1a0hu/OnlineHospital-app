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
        <td><input type="text" v-model="user.userId" placeholder="请输入手机号"/></td>
      </tr>
      <tr>
        <td>旧密码</td>
        <td><input type="password" v-model="user.oldPassword" placeholder="请输入旧密码"/></td>
      </tr>
      <tr>
        <td>新密码</td>
        <td><input type="password" v-model="newPassword" placeholder="请输入新密码"/></td>
      </tr>
      <tr>
        <td>确认新密码</td>
        <td><input type="password" v-model="commitedNewPassword" placeholder="请再次输入新密码"/></td>
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
        userId: '',
        oldPassword: '',
      },
      newPassword: '',
      commitedNewPassword: ''
    }
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    //TODO:验证用户提交的数据是否正确
    submit() {
      console.log(this.$data);
      //字段检测部分
      if (this.oldPassword == '') {
        this.$message({
          showClose: true,//是否显示关闭按钮
          message: '旧密码不能为空',
          type: 'warning',//类型
          onClose: () => {
            console.log('关闭');
          }
        });
        return;
      }
      if (this.newPassword == '') {
        this.$message({
          showClose: true,//是否显示关闭按钮
          message: '新密码不能为空',
          type: 'warning',//类型
          onClose: () => {
            console.log('关闭');
          }
        });
        return;
      }
      if (this.commitedNewPassword == '') {
        this.$message({
          showClose: true,//是否显示关闭按钮
          message: '确认的新密码不能为空',
          type: 'warning',//类型
          onClose: () => {
            console.log('关闭');
          }
        });
        return;
      }
      if (this.commitedNewPassword != this.newPassword) {
        this.$message({
          showClose: true,//是否显示关闭按钮
          message: '两次输入的密码不一致！',
          type: 'warning',//类型
          onClose: () => {
            console.log('关闭');
          }
        });
        return;
      }
      //TODO：逻辑处理部分
      // let url = 'users/login';
      // this.$axios.post(url, this.user).then(response => {
      //   //登录成功，将登录用户名存储到sessionStorage中
      //   this.$setSessionStorage('token', response.data.data);
      //   this.$message({
      //     showClose: true,//是否显示关闭按钮
      //     message: '登录操作成功',
      //     type: 'success',//类型
      //     onClose: () => {
      //       this.$router.push({path: '/'}).catch(e => {
      //       });
      //     },
      //   })
      // }).catch(e => {
      //   console.log(e);
      // })
    }
  }
}
</script>
<style src="@/assets/css/Register.css" scoped></style>
<style scoped>
</style>