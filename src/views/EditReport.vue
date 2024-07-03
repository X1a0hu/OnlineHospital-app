<template>
  <div class="Wrapper">
    <div class="health-check-report">
      <el-row>
        <!-- 左侧部分 -->
        <el-col :span="6">
          <el-header class="header">
            <div class="header-title">体检报告查询</div>
          </el-header>
          <el-form :model="form" label-width="100px" class="demo-form-inline">
            <el-form-item label="手机号码">
              <el-input
                v-model="form.phonenum"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="套餐类型">
              <el-select v-model="form.setmeal" placeholder="请选择套餐类型">
                <el-option label="基础套餐" value="basic"></el-option>
                <el-option label="高级套餐" value="advanced"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="体检日期">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="请选择体检日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="是否归档">
              <el-switch v-model="form.archived"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSearch">查询</el-button>
              <el-button @click="onReset">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- 右侧部分 -->
        <el-col :span="18">
          <div class="report-section">
            <h3>尿常规</h3>
            <el-form :model="urineRoutine" label-width="150px">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="尿白细胞">
                    <template
                      v-if="!isNormal(urineRoutine.leukocyte, 'leukocyte')"
                    >
                      <span class="abnormal">异常</span>
                    </template>
                    <el-input
                      v-model="urineRoutine.leukocyte"
                      placeholder="请输入数值"
                      style="width: 100px"
                    ></el-input>
                    <span
                      >/ul 正常范围：{{ normalRange.leukocyte[0] }}-{{
                        normalRange.leukocyte[1]
                      }}</span
                    >
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="尿蛋白">
                    <template v-if="!isNormal(urineRoutine.protein, 'protein')">
                      <span class="abnormal">异常</span>
                    </template>
                    <el-input
                      v-model="urineRoutine.protein"
                      placeholder="请输入数值"
                      style="width: 100px"
                    ></el-input>
                    <span
                      >g/L 正常范围：{{ normalRange.protein[0] }}-{{
                        normalRange.protein[1]
                      }}</span
                    >
                  </el-form-item>
                </el-col>
              </el-row>
              <!-- 添加其他尿常规小项目 -->
              <el-row>
                <el-col :span="12">
                  <el-form-item label="尿糖">
                    <template v-if="!isNormal(urineRoutine.glucose, 'glucose')">
                      <span class="abnormal">异常</span>
                    </template>
                    <el-input
                      v-model="urineRoutine.glucose"
                      placeholder="请输入数值"
                      style="width: 100px"
                    ></el-input>
                    <span
                      >mmol/L 正常范围：{{ normalRange.glucose[0] }}-{{
                        normalRange.glucose[1]
                      }}</span
                    >
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="尿酮体">
                    <template v-if="!isNormal(urineRoutine.ketone, 'ketone')">
                      <span class="abnormal">异常</span>
                    </template>
                    <el-input
                      v-model="urineRoutine.ketone"
                      placeholder="请输入数值"
                      style="width: 100px"
                    ></el-input>
                    <span
                      >mg/dL 正常范围：{{ normalRange.ketone[0] }}-{{
                        normalRange.ketone[1]
                      }}</span
                    >
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item>
                <el-button type="primary" @click="saveUrineRoutine"
                  >尿常规项保存</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phonenum: "",
        name: "",
        sex: "",
        setmeal: "",
        date: "",
        archived: false,
      },
      urineRoutine: {
        leukocyte: "",
        protein: "",
        glucose: "",
        ketone: "",
      },
      normalRange: {
        leukocyte: [0, 10], // 假设正常范围是0-10
        protein: [0, 0.2], // 假设正常范围是0-0.2
        glucose: [0, 0.8], // 假设正常范围是0-0.8
        ketone: [0, 0.5], // 假设正常范围是0-0.5
      },
    };
  },
  methods: {
    onSearch() {
      console.log("查询条件:", this.form);
      this.fetchData();
    },
    onReset() {
      this.form = {
        phonenum: "",
        name: "",
        sex: "",
        setmeal: "",
        date: "",
        archived: false,
      };
    },
    fetchData() {
      // 模拟获取数据
      console.log("Fetching data...");
    },
    isNormal(value, type) {
      const range = this.normalRange[type];
      return value >= range[0] && value <= range[1];
    },
    saveUrineRoutine() {
      console.log("尿常规数据已保存:", this.urineRoutine);

      // 在这里添加保存数据的逻辑
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.abnormal {
  color: red;
  margin-right: 5px;
}
</style>
