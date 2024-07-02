<template>
    <!-- 总容器 -->
    <div class="wrapper">
        <header>
            <i class="fa fa-angle-left" @click="toLogin"></i>
            <p>注册</p>
            <div></div>
        </header>
        <div class="top-ban"></div>
        <h1>欢迎注册</h1>
        <table>
            <tr>
                <td>手机号码</td>
                <td><input type="text" v-model="user.userId" placeholder="请输入手机号码" /></td>
            </tr>
            <tr>
                <td>真实姓名</td>
                <td><input type="text" v-model="user.realName" placeholder="真实姓名便于查看体检报告" /></td>
            </tr>
            <tr>
                <td>生日</td>
                <td><input type="date" v-model="user.birthday"/></td>
            </tr>
            <tr>
                <td>性别</td>
                <td>
                    <input type="radio" v-model="user.sex" value="1" />男
                    <input type="radio" v-model="user.sex" value="0" />女
                </td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td><input type="text" v-model="user.identityCard" placeholder="请输入身份证号" /></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="password" v-model="user.password" placeholder="请输入密码" /></td>
            </tr>
            <tr>
                <td>确认密码</td>
                <td><input type="password" v-model="user.password2" placeholder="请再次输入密码" /></td>
            </tr>
        </table>
        <div class="btn" @click="submit">完成</div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          user:{
            userId:'',
            realName:'',
            password:'',
            password2:'',
            sex:1,
            identityCard:'',
            birthday:''
          }
        }
      },
      methods:{
        toLogin(){
          this.$router.push({path:'/login'}).catch(e=>{});
        },
        //TODO:验证用户提交的数据是否正确
        submit(){
          if(this.user.password!=this.user.password2){
            this.$message({
              showClose: true,//是否显示关闭按钮
              message: '两次输入的密码不一致',
              type: 'error',//类型
              onClose:()=>{
                console.log('关闭');
              }
            });
            return;
          }

          let url='users/register';
          this.$axios.post(url,this.user).then(response=>{
              this.$setSessionStorage('token',response.data.data);
              this.$message({
                showClose: true,//是否显示关闭按钮
                message: '注册操作成功',
                type: 'success',//类型
                onClose:()=>{
                  this.$router.push({path:'/login'}).catch(e=>{});
                },
              })
          }).catch(e=>{
            console.log(e);
          })
        },
      }
    }
</script>
<style src="@/assets/css/Register.css" scoped></style>
<style scoped>
</style>