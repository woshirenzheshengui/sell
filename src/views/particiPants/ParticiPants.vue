<template>
  <div >
    <el-card class="el-breadcrumb" shadow="never">
      <el-button size="mini" @click="addUser()">返回列表</el-button>
      <el-button style="float: right; padding-right: 15px;" type="primary">导出全部数据</el-button>
    </el-card>
     <div class="box">
    <el-table
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="用户头像"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="手机号">
    </el-table-column>
     <el-table-column
      property="address"
      label="参与时间">
    </el-table-column>
     <el-table-column
      property="address"
      label="TA支持的宝宝">
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>
<script>
export default {
      data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },
};
</script>
<style lang="scss" scoped>
.el-card__body {
padding: 0;

}
</style>