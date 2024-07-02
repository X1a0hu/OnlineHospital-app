<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left" @click="toBack()"></i>
      <p>请您选择体检机构</p>
      <div></div>
    </header>
    <div class="top-ban"></div>

    <ul class="hospital">
      <li v-for="(item,index) in hospitalList" :key="item.hpId">
        <h3>
          {{ item.name }}
          <i class="fa fa-angle-right" aria-hidden="true" @click="toSetMeal"></i>
        </h3>
        <div class="hospital-info">
          <img :src="item.picture" alt="Hospital Image">
          <table>
            <tr>
              <td>营业时间:</td>
              <td>{{ item.businessHours }}</td>
            </tr>
            <tr>
              <td>采血截止:</td>
              <td>{{ item.deadline }}</td>
            </tr>
            <tr>
              <td>电话:</td>
              <td>{{ item.telephone }}</td>
            </tr>
            <tr>
              <td>地址:</td>
              <td>{{ item.address }}</td>
            </tr>
          </table>
        </div>
        <div class="about">
          <p>
            <i class="fa fa-phone"></i>
            联系我们
          </p>
          <p>
            <i class="fa fa-map-marker"></i>
            查找位置
          </p>
        </div>
      </li>
    </ul>

    <div class="bottom-ban"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import {head} from "axios";

export default {
  data() {
    return {
      hospitalList: [],
    }
  },
  created() {
    this.loadHospitalList();
  },
  methods: {
    toSetMeal() {
      this.$router.push({path: '/setMeal'}).catch(e => {
      })
    },
    toBack() {
      this.$router.back();
    },
    loadHospitalList() {
      let url = '/hospital/getAll';
      this.$axios({
        method: 'get',
        url: url,
        headers:{
          Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
        }
      }).then(response => {
        this.hospitalList = response.data.data;
      }).catch(e => {
        console.log(e)
      })
    }
  },
  components: {
    //注册子组件   使用名字:导入名字
    Footer,
  },

}
</script>

<style src="@/assets/css/Hospital.css" scoped></style>
<style scoped>
</style>
