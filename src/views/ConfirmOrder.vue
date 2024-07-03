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
        <p>体检机构</p>
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
          <td>XXXXXX</td>
        </tr>
      </table>
    </section>

    <div ref="alipayForm"></div>

    <div class="bottom-btn">
      <div class="first">实付款: <span>￥0.00</span></div>
      <div class="last">确认支付</div>
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
        userID: "",
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
    };
  },
  ctreated() {
    loadHospitalInfo();
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
          console.log("运行到了！");
        })
        .catch((e) => {
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
