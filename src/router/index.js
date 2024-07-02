import Vue from "vue"; //导入Vue库中的vue对象
import VueRouter from "vue-router"; //导入路由库中的路由对象
//前面是设置的别名
Vue.use(VueRouter); //导入插件，必须通过Vue使用(use())后才能生效
const routes = [
  //路由对象，一个路由对象配置一个组件界面的信息
  //path，请求组件界面路径
  //name，请求组件定义名字
  //component，访问的是哪个组件
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/consulting",
    name: "consulting",
    component: () => import("@/views/Consulting.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/Shop.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue"),
  },
  {
    path: "/notFound",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/hospital",
    name: "hospital",
    component: () => import("@/views/Hospital.vue"),
  },
  {
    path: "/updatepwd",
    name: "updatepwd",
    component: () => import("@/views/UpdatePWD.vue"),
  },
  {
    path: "/setMeal",
    name: "setMeal",
    component: () => import("@/views/SetMeal.vue"),
  },
  {
    path: "/selectDate",
    name: "selectDate",
    component: () => import("@/views/SelectDate.vue"),
  },
  {
    path: "/backStage",
    name: "backStage",
    component: () => import("@/views/BackStage.vue"),
  },
];
//创建路由对象，需要将上面配置的路由信息(数组)
const router = new VueRouter({
  mode: "hash",
  routes,
});
//导出创建好的路由对象
export default router;
