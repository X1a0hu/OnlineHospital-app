<template>
  <div class="Wrapper">
    <HeaderofBack :doctorrealName="doctorrealName" />
    <div class="health-check-report">
      <el-row :gutter="20">
        <el-col :span="6" class="sidebar">
          <!-- 表单 -->
          <el-form :model="form" label-width="100px" class="demo-form-inline">
            <!-- 手机号码 -->
            <el-form-item label="手机号码">
              <el-input
                v-model="user.userID"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <!-- 姓名 -->
            <el-form-item label="姓名">
              <el-input
                v-model="user.realName"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
            <!-- 性别 -->
            <el-form-item label="性别">
              <el-select v-model="user.sex" placeholder="请选择性别">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <!-- 套餐类型 -->
            <el-form-item label="套餐类型">
              <el-select v-model="type" placeholder="请选择套餐类型">
                <el-option label="基础套餐" value="basic"></el-option>
                <el-option label="高级套餐" value="advanced"></el-option>
              </el-select>
            </el-form-item>
            <!-- 体检日期 -->
            <el-form-item label="体检日期">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="请选择体检日期"
              ></el-date-picker>
            </el-form-item>
            <!-- 是否归档 -->
            <el-form-item label="是否归档">
              <el-switch v-model="form.archived"></el-switch>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
              <el-button type="primary" @click="onSearch">查询</el-button>
              <el-button type="warning" @click="onReset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <!-- 右侧表格 -->
        <el-col :span="18">
          <el-table :data="tableData" style="width: 100%" class="Table">
            <!-- 预约编号列 -->
            <el-table-column
              prop="orderid"
              label="预约编号"
              width="100"
            ></el-table-column>
            <!-- 手机号码列 -->
            <el-table-column
              prop="phone"
              label="手机号码"
              width="150"
            ></el-table-column>
            <!-- 真实姓名列 -->
            <el-table-column
              prop="realName"
              label="真实姓名"
              width="120"
            ></el-table-column>
            <!-- 性别列 -->
            <el-table-column
              prop="sex"
              label="性别"
              width="100"
            ></el-table-column>
            <!-- 体检套餐类型列 -->
            <el-table-column
              prop="setMealtype"
              label="体检套餐类型"
              width="150"
            ></el-table-column>
            <!-- 体检医院列 -->
            <el-table-column
              prop="examhospital"
              label="体检医院"
              width="100"
            ></el-table-column>
            <!--  体检日期列 -->
            <el-table-column
              prop="date"
              label="体检日期"
              width="100"
            ></el-table-column>
            <!-- 操作列 -->
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="primary" @click="editReport(scope.row)"
                  >编辑体检报告</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeaderofBack from "@/components/HeaderofBack.vue";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        userID: "",
        realName: "",
        sex: "",
        setMeal: "",
        date: "",
        archived: true,
      },
      tableData: [],
      total: 0,
      size: 10,
      page: 1,
      pageSizes: [10, 20, 30],
      // 左侧表单所需数据
      user: {
        userID: "", //手机号码
        realName: "", //姓名
        sex: "", //性别
      },
      type: "", //套餐类型
      state: "", //是否归档
      //
      doctorrealName: "", //头部显示医生姓名
    };
  },
  methods: {
    toHome() {
      this.$router.back();
    },
    onSearch() {
      console.log("查询条件:", this.form);
      this.fetchData();
    },
    onReset() {
      this.form = {
        userID: "",
        realName: "",
        sex: "",
        setMeal: "",
        date: "",
        archived: false,
      };
    },
    fetchData() {
      this.tableData = [
        {
          orderid: "001",
          phone: "13800138000",
          realName: "张三",
          sex: "male",
          setMealtype: "basic",
          examhospital: "医院A",
          date: "2023-07-01",
          archived: true,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "001",
          phone: "13800138000",
          realName: "张三",
          sex: "male",
          setMealtype: "basic",
          examhospital: "医院A",
          date: "2023-07-01",
          archived: true,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
        {
          orderid: "002",
          phone: "13800138001",
          realName: "李四",
          sex: "female",
          setMealtype: "advanced",
          examhospital: "医院B",
          date: "2023-07-02",
          archived: false,
        },
      ];
      this.total = this.tableData.length;
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.fetchData();
    },
    editReport(row) {
      this.$router.push({ path: "/editReport", query: { id: row.orderid } });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style src="@/assets/css/ReportManageSystem.css" scoped></style>
