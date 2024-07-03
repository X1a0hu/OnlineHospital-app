<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left" @click="toBack()"></i>
      <p>确认您的订单</p>
      <div></div>
    </header>
    <div class="top-ban"></div>

    <section>
      <div class="title">
        <p>体检人信息</p>
      </div>
      <table>
        <tr>
          <td>姓名:</td>
          <td>{{ this.user.realName }}</td>
        </tr>
        <tr>
          <td>证件号码:</td>
          <td>{{ this.user.identityCard }}</td>
        </tr>
        <tr>
          <td>出生日期:</td>
          <td>{{ this.user.birthday }}</td>
        </tr>
        <tr>
          <td>手机号码:</td>
          <td>{{ this.user.userID }}</td>
        </tr>
      </table>
      <div class="title">
        <p>体检日期</p>
      </div>
      <table>
        <tr>
          <td>{{ formatDate(this.selectDay) }}</td>
        </tr>
      </table>
      <div class="title">
        <p>体检机构：</p>
        {{ this.hospital.name }}
      </div>
      <table>
        <tr>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>营业时间:</td>
          <td>{{ this.hospital.businessHours }}</td>
        </tr>
        <tr>
          <td>采血截止:</td>
          <td>{{ this.hospital.deadline }}</td>
        </tr>
        <tr>
          <td>机构电话:</td>
          <td>{{ this.hospital.telephone }}</td>
        </tr>
        <tr>
          <td>机构地址:</td>
          <td>{{ this.hospital.address }}</td>
        </tr>
      </table>
      <div class="title">
        <p>套餐类型</p>
      </div>
      <table>
        <tr>
          <td v-if="smID == 1">男士套餐</td>
          <td v-else="smID == 0">女士套餐</td>
        </tr>
      </table>
    </section>

    <div ref="alipayForm"></div>

    <div class="bottom-btn">
      <div class="first">
        实付款: <span>{{ this.price }}元</span>
      </div>
      <div class="last" @click="pay()">确认支付</div>
    </div>

    <div class="bottom-ban"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      user: {
        realName: "",
        identityCard: "",
        birthday: "",
        userID: "", //就是手机号码
      },
      hospital: {
        hpID: this.hpID,
        name: "",
        businessHours: "",
        deadline: "",
        telephone: "",
        address: "",
      },
      smID: this.$route.query.smID,
      hpID: this.$route.query.hpID,
      year: this.$route.query.year,
      month: this.$route.query.month,
      selectDay: this.$route.query.selectDay,
      price: "",
      state: "",
    };
  },
  created() {
    this.loadHospitalInfo();
    this.getSetMealPrice();
    this.getUserInfo();
  },
  methods: {
    toBack() {
      this.$router.back();
    },
    formatDate(selectDay) {
      if (!selectDay) return "";
      const [year, month, day] = selectDay.split("-");
      return `${year}年${parseInt(month)}月${parseInt(day)}日`;
    },
    loadHospitalInfo() {
      let url = "/hospital/getByHospitalID";
      this.$axios({
        method: "get",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        params: {
          hpID: this.hpID,
        },
      })
        .then((response) => {
          this.hospital.name = response.data.data.name;
          this.hospital.businessHours = response.data.data.businessHours;
          this.hospital.deadline = response.data.data.deadline;
          this.hospital.telephone = response.data.data.telephone;
          this.hospital.address = response.data.data.address;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //获取套餐价格
    getSetMealPrice() {
      let url = "/setMeal/getBySetMealID";
      this.$axios({
        method: "get",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        params: {
          smID: this.smID,
        },
      })
        .then((response) => {
          this.price = response.data.data.price;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //获取用户信息
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
    //确认支付
    pay() {
      let url = "/user/submitReserve";
      this.$axios({
        method: "post",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        data: {
          orderDate: this.selectDay,
          userID: this.user.userID,
          hpID: this.hpID,
          smID: this.smID,
          state: 1,
        },
      })
        .then((response) => {
          if (response.data.code == 200) {
            this.$router.push({ path: "/pay" }).catch((e) => {
              console.log(e);
            });
            this.$message({
              showClose: false, //是否显示关闭按钮
              message: "订单已提交！",
              duration: 1000,
              type: "success", //类型
            });
          }
        })
        .catch((e) => {
          console.log(this.selectDay);
          console.log(this.user.userID);
          console.log(this.hpID);
          console.log(this.smID);
          console.log(e);
        });
    },
  },
  components: {
    //注册子组件   使用名字:导入名字
    Footer,
  },
};
</script>
<style src="@/assets/css/ConfirmOrder.css" scoped></style>
<style scoped></style>
