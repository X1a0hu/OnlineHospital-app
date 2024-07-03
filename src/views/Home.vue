<template>
  <!-- 总容器 -->
  <div class="wrapper">
    <!-- 头部 -->
    <header>
      <div class="header-content">
        <div class="header-content-left">
          <h1>上海海洋大学</h1>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
        <!-- <i class="fa fa-envelope-o" aria-hidden="true"></i> -->
        <i
          class="fa fa-database fa-x"
          aria-hidden="true"
          @click="toBackStage"
        ></i>
      </div>
      <div class="header-bottom"></div>
    </header>

    <div class="top-ban"></div>
    <!-- 导航部分 -->
    <nav>
      <div class="logo-img">
        <img src="@/assets/img/logo.png" />
      </div>
      <ul>
        <li>
          <img src="@/assets/img/menu01.png" />
          <div class="nav-item-text" @click="toConsulting">
            <h3>免费咨询</h3>
            <p>新型冠状病毒肺炎</p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/menu02.png" />
          <div class="nav-item-text">
            <h3>网络问诊</h3>
            <p>图文视频网络咨询</p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/menu03.png" />
          <div class="nav-item-text">
            <h3><span class="menu03-h3-span">e</span>心门诊</h3>
            <p>复旦医科大学专家</p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/menu04.png" />
          <div class="nav-item-text">
            <h3>慢病管理</h3>
            <p>血压血糖健康管理</p>
          </div>
        </li>
        <li>
          <img src="@/assets/img/menu05.png" />
          <div class="nav-item-text">
            <h3>上门护理</h3>
            <p>网上购买上门服务</p>
          </div>
        </li>
        <li @click="HospitalList">
          <img src="@/assets/img/menu06.png" />
          <div class="nav-item-text">
            <h3>团检预约</h3>
            <p>团体体检套餐定制</p>
          </div>
        </li>
      </ul>
    </nav>

    <!-- 我的健康报告 -->
    <div class="report">
      <div class="item-title">
        <p>我的健康报告</p>
      </div>
      <div class="report-content">
        <p>随时随地查看体检报告</p>
        <div v-if="isLogin" @click="toReport()">立即查看</div>
        <div v-else @click="toLogin()">立即登录</div>
      </div>
    </div>

    <!-- 推荐医生 -->
    <div class="doctor">
      <div class="item-title">
        <p>推荐医生</p>
      </div>
      <ul>
        <!--key给到的值要不重复-->
        <li v-for="(item, index) in doctorList" :key="index">
          <img :src="item.img" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.job }}</p>
        </li>
      </ul>
    </div>

    <!-- 健康评估 -->
    <div class="assess">
      <div class="item-title">
        <p>健康评估</p>
        <span>更多</span>
      </div>
      <div class="assess-content">
        <div class="scroll-box" id="scrollBox">
          <ul id="scrollBar">
            <li><img src="@/assets/img/assess1.png" /></li>
            <li><img src="@/assets/img/assess2.png" /></li>
            <li><img src="@/assets/img/assess3.png" /></li>
            <li><img src="@/assets/img/assess4.png" /></li>
            <li><img src="@/assets/img/assess5.png" /></li>
            <li><img src="@/assets/img/assess6.png" /></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 健康咨询 -->
    <div class="info">
      <div class="item-title">
        <p>健康咨询</p>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/info1.png" />
          <div>
            <h3>查出肺结核，我是不是要得肺癌了？</h3>
            <span>肺结核一定会导致肺癌吗？</span>
            <p><i class="fa fa-commenting-o"></i>3699</p>
          </div>
        </li>
        <div class="middle-ban"></div>
        <li>
          <img src="@/assets/img/info2.png" />
          <div>
            <h3>体检发现甲状腺结节，怎么办？</h3>
            <span>日常需注意什么？</span>
            <p><i class="fa fa-commenting-o"></i>4256</p>
          </div>
        </li>
      </ul>
    </div>
    <f></f>
    <div class="bottom-ban"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      test: sessionStorage.getItem("userID"),
      isLogin: this.test != null ? true : false,
      //组件界面定义变量
      //推荐医生的数组
      doctorList: [
        {
          name: "刘长胜",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "孙鹿",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "吕文达",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "李若辰",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "张石凡",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "赵桂凤",
          job: "副主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "李文",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796.jpg",
        },
        {
          name: "吴晓梦",
          job: "主任医师",
          img: "https://img1.baidu.com/it/u=2230649002,3216622932&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=796",
        },
      ],
    };
  },
  methods: {
    toBackStage() {
      this.$router.push({ path: "/reportManageSystem" }).catch((e) => {});
    },
    //组件界面使用所有的方法
    toLogin() {
      this.$router.push({ path: "/login" }).catch((e) => {});
    },
    toConsulting() {
      this.$router.push({ path: "/consulting" }).catch((e) => {});
    },
    toReport() {
      this.$router.push({ path: "/checkReport" }).catch((e) => {});
    },
    HospitalList() {
      if (!this.isLogin) {
        this.$message({
          showClose: false, //是否显示关闭按钮
          message: "您还没有进行登录！请先登录！",
          duration: 1000,
          type: "warning", //类型
          onClose: () => {
            console.log("关闭");
          },
        });
      } else {
        this.$router.push({ path: "/hospital" }).catch((e) => {});
      }
    },
  },
  components: {
    //注册子组件 使用名字：导入名字
    f: Footer,
  },
  created() {
    console.log(this.isLogin);
  },
  mounted() {
    this.isLogin = this.test != null ? true : false;
    //Dom加载完毕执行
    this.$nextTick(() => {
      //健康评估动态效果
      let startX = 0; //手指接触屏幕时的X坐标
      let endX = 0; //手指在屏幕上滑动时的X坐标
      let scrollBarLeft = 0; //滚动条left值（X坐标值）
      let scrollBox = document.getElementById("scrollBox"); //滚动条容器对象
      let scrollBar = document.getElementById("scrollBar"); //滚动条对象
      //滚动条向左滚动的极限位置（滚动条容器宽度-滚动条长度）
      let stop = scrollBox.offsetWidth - scrollBar.offsetWidth;
      //touchStart事件
      scrollBox.addEventListener(
        "touchstart",
        function (event) {
          let touch = event.targetTouches[0];
          startX = touch.pageX;
          scrollBarLeft = scrollBar.offsetLeft;
        },
        false
      );
      //touchMove事件
      scrollBox.addEventListener(
        "touchmove",
        function (event) {
          let touch = event.targetTouches[0];
          endX = touch.pageX;
          let len = endX - startX + scrollBarLeft;
          if (len >= 0) {
            len = 0;
          }
          if (len <= stop) {
            len = stop;
          }
          scrollBar.style.left = len + "px";
        },
        false
      );
    });
  },
};
</script>
<style src="@/assets/css/Home.css" scoped></style>
<style></style>
