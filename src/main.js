import Vue from 'vue'
import App from './App.vue'//'.'代表当前目录
import router from '@/router/index.js'//index.js可以简/不写
import 'font-awesome/css/font-awesome.css'
import ElementUI from 'element-ui'//导入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage
} from './common.js'
import qs from 'qs'
import myaxios from "@/api/index.js"


Vue.config.productionTip = false//提示信息，关闭
Vue.use(ElementUI)//使用一下

//为了在组件中方便去使用导入方法，挂在Vue实例中
Vue.prototype.$setSessionStorage = setSessionStorage;
Vue.prototype.$getSessionStorage = getSessionStorage;
Vue.prototype.$removeSessionStorage = removeSessionStorage;
Vue.prototype.$setLocalStorage = setLocalStorage;
Vue.prototype.$getLocalStorage = getLocalStorage;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = myaxios;
//创建Vue对象
if (module.hot) {
    module.hot.a
}
new Vue({
    router,//注册导入的路由对象
    render: h => h(App)//渲染页面，将App.vue主组件中内容渲染到index.html中
}).$mount('#app')//'#app' id="app"的标签
