<template>
    <!-- 总容器 -->
    <div class="wrapper">
      <!-- 头部 -->
      <header>
        <div class="header-content">
          <div class="header-content-center">
            <h1>健康档案</h1>
          </div>
          <i
            class="fa fa-database fa-2x"
            aria-hidden="true"
            @click="toBackStage"
          ></i>
        </div>
        <div class="header-bottom"></div>
      </header>
  
      <!-- 健康档案 -->
      <div class="image-container">
        <img src="@/assets/img/report.png" class="header-image" />
      </div>
      <div class="health-record">
        <div class="report-list">
          <div
            v-for="(report, index) in reports"
            :key="index"
            class="report-item"
            @click="viewReportDetail(index)"
          >
            <div class="report-item-header">
              <h3>{{ report.date }} 体检报告</h3>
              <span>{{ report.hospital }}</span>
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div class="report-item-content">
              <p><strong>检查项目：</strong>{{ report.items }}</p>
            </div>
          </div>
        </div>
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
        reports: [
          {
            date: '2023-06-01',
            hospital: '医院A',
            items: '血常规、尿常规、肝功能',
          },
          {
            date: '2023-12-01',
            hospital: '医院B',
            items: '心电图、B超、肾功能',
          }
        ]
      };
    },
    methods: {
      toBackStage() {
        this.$router.push({ path: "/backstage" }).catch((e) => {});
      },
      viewReportDetail(index) {
        this.$router.push({ path: `/report/${index}` }).catch((e) => {});
      }
    },
    components: {
      Footer
    }
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f0f0f0; /* 确保整个背景为浅灰色 */
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
  .header-content-center {
    display: flex;
    justify-content: center;
    flex: 1;
  }
  
  .header-content-center h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    padding-bottom: 0; /* 移除底部填充 */
    background-color: #f0f0f0; /* 将背景颜色设置为浅灰色以覆盖整个背景 */
  }
  
  .header-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: contain; /* 保持图片纵横比 */
  }
  
  .health-record {
    flex: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
  
  .report-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .report-item {
    padding: 15px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  
  .report-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .report-item-header h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  
  .report-item-header span {
    font-size: 14px;
    color: #999;
  }
  
  .report-item-content p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
  
  .bottom-ban {
    height: 20px;
    background-color: #f5f5f5;
  }
  </style>
  