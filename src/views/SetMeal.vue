<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <header>
      <i class="fa fa-angle-left" @click="toBack()"></i>
      <p>选择体检套餐</p>
      <h1 v-show="false">海洋大学</h1>
      <div></div>
    </header>
    <div class="top-ban"></div>

    <ul class="setmeal">
      <li v-for="(smItem,index) in setmeals" :key="smItem.smId">
        <div class="item">
          <div class="item-left">
            <h3>{{ smItem.name }}</h3>
            <p>{{ smItem.price }}</p>
          </div>
          <div class="item-right" @click="setBool(index)">
            <p>详情</p>
            <i v-show="smItem.show" class="fa fa-angle-up"></i>
            <i v-show="!smItem.show" class="fa fa-angle-down"></i>
          </div>
        </div>
        <div class="item-content" v-show="smItem.show">
          <table>
            <tr>
              <th>检查项目</th>
              <th>检查内容</th>
              <th>检查意义</th>
              <th>检查要求</th>
            </tr>
            <tr v-for="checkItem in smItem.checkItemList">
              <td>{{ checkItem.ciName }}</td>
              <td>{{ checkItem.ciContent }}</td>
              <td>{{ checkItem.meaning }}</td>
              <td>{{ checkItem.remarks }}</td>
            </tr>
          </table>
        </div>
      </li>
    </ul>

    <div class="bottom-ban"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {
      //套餐和检查明细数组
      setmeals: [],
    }
  },
  created() { //Vue组件创建完毕钩子函数，在这里请求服务器数据。
    this.loadSetMealList();
  },
  methods: {
    toBack() {
      this.$router.back()
    },
    setBool(index) {  //index就是点击 套餐下标
      this.setmeals[index].show = !this.setmeals[index].show;
      this.setmeals.sort();  //刷新页面数组的值
    },
    loadSetMealList() {
      let url = "/setmeal/getAll";
      this.$axios({
        method: 'get',
        url: url,
        headers: {
          Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('token'))
        }
      }).then(response => {
        console.log("success")
        this.setmeals = response.data.data
        this.setmeals.forEach(sm => {
          sm.show = false;
        })
      }).catch(e => {
        console.log(e);
      })
    }
  },
  components: {
//注册子组件   使用名字:导入名字
    Footer,
  },
}
</script>

<style src="@/assets/css/SetMeal.css" scoped></style>
<style scoped>
</style>
