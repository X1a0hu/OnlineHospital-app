<template>
  <div class="discover">
    <header>
      <div class="header-content">
        <i class="fa fa-arrow-left" aria-hidden="true" @click="toHome"></i>
        <h1>发现</h1>
      </div>
    </header>
    
    <div class="content">
      <div class="posts">
        <div class="post" v-for="(post, index) in posts" :key="index">
          <img :src="post.img" />
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      posts: [
        {
          img: "https://pica.zhimg.com/v2-b8135c12e70d9336bbd6160aa2416b21_720w.jpg?source=172ae18b",
          title: "震惊！上海某男子连续吸入氧气八十年后竟然……",
          content: "该男子的精神状态良好，只是一直念叨什么“Spring”、“Vue”的词，家人表示不解。",
        },
        {
          img: "https://pic4.zhimg.com/80/v2-fc2fa98116190cfadc94d2009bf51d3b_720w.webp",
          title: "爽！一宿舍在40度高温坚持将空调调至16度并且敲代码不出门",
          content: "宿舍成员表示：冷却了才能干活。",
        },
        {
          img: "https://pic2.zhimg.com/80/v2-93fbb6ba8b988e1a612cd42248cc2479_720w.webp",
          title: "你还不知道？一天吃四顿饭会发生什么？",
          content: "敲代码再晚，你还有康师傅陪你。",
        },
        {
          img: "https://pic2.zhimg.com/80/v2-51e5530d6f6098fba944b7a5c4f2c101_720w.webp",
          title: "Vue！爽！Spring！爽！JAVA！爽",
          content: "期末，爽！小学期，爽！",
        },
      ],
    };
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" }).catch((e) => {});
    },
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
.discover {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.header-content i {
  font-size: 24px;
  cursor: pointer;
}

.header-content h1 {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 24px;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
}

.posts {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.post img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.post h3 {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}

.post p {
  font-size: 14px;
  color: #666;
}
</style>
