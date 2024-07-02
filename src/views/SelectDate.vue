<template>
    <!-- 总容器 -->
    <div class="wrapper">
        <header>
            <i class="fa fa-angle-left"></i>
            <p>选择体检日期</p>
            <div></div>
        </header>
        <div class="top-ban"></div>

        <section>
            <div class="date-box">
                <i class="fa fa-angle-left"></i> 
                <p>2024年7月</p>
                <i class="fa fa-angle-right" ></i> 
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
                <li>
                    <p >
                        1
                    </p>
     
                    <p class="count">
                        200
                    </p>
                    <p class="none">
                       休息
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
import Footer from '@/components/Footer.vue'
export default{
    data () {
        return{
            
           
        }
    },
    created(){ //Vue组件创建完毕钩子函数，在这里请求服务器数据。
     
    },
    methods:{  
        
    },
    components: {
        //注册子组件   使用名字:导入名字
        Footer,
    },
}
</script>
<style src="@/assets/css/SelectDate.css" scoped></style>
<style scoped>
</style>
