<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left" @click="toBack()"></i>
      <p>选择体检日期</p>
      <div></div>
    </header>
    <div class="top-ban"></div>

    <section>
      <div class="date-box">
        <i class="fa fa-angle-left" @click="preMonth()"></i>
        <p>
          {{ checkAvailability.year + "年" + checkAvailability.month + "月" }}
        </p>
        <i class="fa fa-angle-right" @click="nextMonth()"></i>
      </div>
      <table>
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
      </table>
      <ul>
        <li v-for="(c, index) in checkAvailability.days" :key="index">
          <p
            :class="{
              fontColor: c.reserve == true && c.remainSlots != 0,
              pselect: c.selectDay == 1,
            }"
            @click="selectDay(index)"
          >
            {{ c.date != null ? new Date(c.date).getDate() : "" }}
          </p>
          <p class="count">
            {{
              index % 7 == 0 && c.date != null
                ? ""
                : c.reserve == true && c.remainSlots != 0
                ? "余" + c.remainSlots
                : "0"
            }}
          </p>
          <p class="none">
            {{ index % 7 == 0 && c.date != null ? "休息" : "" }}
          </p>
        </li>
      </ul>
    </section>
    <div class="bottom-btn">
      <div></div>
      <div>下一步</div>
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
      //接受服务器端返回数据对象：
      checkAvailability: {
        hpID: this.$route.query.hpID, //值从上一个组件界面获得
        smID: this.$route.query.smID, //值从上一个组件界面获得
        year: null,
        month: null,
        days: [],
        selectDay: "", //日历中选中的日期
      },
    };
  },
  created() {
    this.initDate();
    this.loadOrdersData();
  },
  methods: {
    selectDay(index) {
      if (this.checkAvailability.days[index].reserve == false) {
        return;
      }
      for (let i = 0; i < this.checkAvailability.days.length; i++) {
        this.checkAvailability.days[i].selectDay = 0; //清除日历中每天选中状态 全部清零
      }
      this.checkAvailability.days[index].selectDay = 1;
      this.checkAvailability.selectDay =
        this.checkAvailability.days[index].date;
      this.checkAvailability.days.sort();
    },
    toBack() {
      this.$router.back();
    },
    initDate() {
      let getTime = new Date().getTime(); //当前时间戳
      let d = new Date(getTime);
      this.checkAvailability.year = d.getFullYear();
      this.checkAvailability.month = d.getMonth() + 1;
    },
    //得到当前日期参数值：
    getCalendarDate() {
      let year = this.checkAvailability.year;
      let month = this.checkAvailability.month + "";
      month = month.padStart(2, "0");
      let day = "01";
      //2024-07-02
      return `${year}-${month}-${day}`; //模版字符串 ES6
    },
    //加载日历和预约订单量
    loadOrdersData() {
      let url = "/orders/checkAvailability";
      this.$axios({
        method: "get",
        url: url,
        headers: {
          Authorization:
            "Bearer " + JSON.parse(sessionStorage.getItem("token")),
        },
        params: {
          smID: this.checkAvailability.smID,
          hpID: this.checkAvailability.hpID,
          startDate: this.getCalendarDate(),
        },
      })
        .then((response) => {
          this.checkAvailability.days = response.data.data.availableDays;
          for (let i = 0; i < this.checkAvailability.days.length; i++) {
            if (this.checkAvailability.days[i].date != null) {
              this.checkAvailability.days[i].day =
                this.checkAvailability.days[i].date.substring(8);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //前一个月
    preMonth() {
      if (this.checkAvailability.month > 1) {
        this.checkAvailability.month--;
      } else {
        this.checkAvailability.year--;
        this.checkAvailability.month = 12;
      }
      this.loadOrdersData();
    },
    //后一个月
    nextMonth() {
      if (this.checkAvailability.month < 12) {
        this.checkAvailability.month++;
      } else {
        this.checkAvailability.year++;
        this.checkAvailability.month = 1;
      }
      this.loadOrdersData();
    },
  },
  components: {
    //注册子组件 使用名字:导入名字
    Footer,
  },
};
</script>

<style src="@/assets/css/SelectDate.css" scoped></style>
<style scoped></style>
