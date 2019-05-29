<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <span>我的全部学员</span>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
       
          <el-input  class="search-input"  placeholder="请输入内容" >
            <!-- <template slot="append">搜索</template> -->
            
          </el-input>
           <el-button type="primary" @click="onSubmit">查询</el-button>
           <el-button  style="float: right" type="primary" @click="onSubmit">导出全部数据</el-button>
           <el-button @click="add"  style="float: right" type="primary">新增学员连接</el-button>
      </el-col>
    
    </el-row>
    <div class="box">
    <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%;margin-top:15px"
    
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
       label="用户id"
      width="55">
    </el-table-column>
    <el-table-column
      label="用户ID"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      label="宝宝姓名"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="宝宝家长电话"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="性别"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="图片个数"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="参与人数"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column
      prop="address"
      label="操作"
      width="200px"
      >
       <el-button type="text" @click="edit(scope.row)">已开启</el-button>
       <el-button type="text" @click="handleDelete(scope.$index, scope.row)">复制连接</el-button>
      <el-button type="text" @click="edit(scope.$index, scope.row)">编辑</el-button>
          
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>
<script>
export default {
     data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      add(){
          this.$router.push('/studentconnection?type=add')
        },
        edit(index,row){
          this.$router.push('/studentconnection?type=edit&id='+row.id)
        },
    }
  
};
</script>
<style lang="scss" scoped>
.search-input{
    width: 200px;
 
}
.box{
    border: 1px solid #ccc;
    margin-top: 15px;
}

</style>