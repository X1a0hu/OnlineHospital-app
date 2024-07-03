<template>
  <div class="shop">
    <header>
      <i class="fa fa-angle-left fa-2x" @click="toBack()"></i>
      <h1>商城</h1>
    </header>

    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="product.image" alt="Product Image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      products: [
        {
          name: "商品 1",
          price: "¥100",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 2",
          price: "¥200",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 3",
          price: "¥300",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 4",
          price: "¥400",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 5",
          price: "¥500",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 6",
          price: "¥600",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 7",
          price: "¥600",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "商品 8",
          price: "¥600",
          image: "https://via.placeholder.com/150",
        },
      ],
    };
  },
  methods: {
    toBack() {
      this.$router.back();
    },
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

header i {
  cursor: pointer;
}

header h1 {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 24px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px 80px;
}

.product {
  flex-basis: calc(42% - 5px); /* 每行两个商品，考虑到间隙 */
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product img {
  width: 100%; /* 确保图片宽度占满父容器 */
  height: auto;
  border-radius: 8px;
}

.product h3 {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}

.product p {
  font-size: 16px;
  color: #666;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
