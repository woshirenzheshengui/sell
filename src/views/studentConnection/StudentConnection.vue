<template>
  <div>
    <el-card class="el-breadcrumb" shadow="never">
      <el-button size="mini" @click="addUser()">返回列表</el-button>
    </el-card>

    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">新增学员连接</div>
      </el-col>
    </el-row>
    <div class="box">
      <el-form ref="form" label-width="120px">
        <el-form-item label="1 填写宝宝姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="宝宝家长电话">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-car class="box-card">
      <span>2. 添加图片：（最多6张）</span>
    </el-car>
    <div class="images">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    </div>
    <div class="button">
      <el-button style="width:98px;" type="info" plain>取消</el-button>
      <el-button type="success">生成连接</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
        //  dialogImageUrl: '',
        // dialogVisible: false
      },
      methods: {
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        
      }
    };
  }
};
</script>
<style lang="">
.el-card__body {
  padding: 0;
}
/* .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
}
.bg-purple {
  background: #d3dce6;
  text-align: center;

  color: #fff;
  font-size: 16px;
 
}
.el-input {
  width: 250px;
}
.box {
  margin: 50px 200px;
}
.box-card {
  width: 480px;
  font-size: 14px;
  color: #606266;
}
.box-card {
  margin: 30px 210px;
}
.el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 80px;
}
.images{
  width: 100%;
margin:50px 150px;
/* display: flex;
justify-content:　space-around; */
}
.images div{
  /* float: left; */
  display: inline-block;
  margin-left: 20px;
}
.button{
  display: flex;
  justify-content:center;
  margin-bottom: 150px;
}
</style>