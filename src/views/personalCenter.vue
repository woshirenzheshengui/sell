<template>
  <div class="center">
    <el-form label-width="140px" size="small">
      <el-form-item>
        <div class="avatar">
          <img src="../assets/69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658.jpg" alt>
          <p>上传logo</p>
        </div>
      </el-form-item>
      <el-form-item label="主体名称">
        <el-input class="input1"></el-input>
      </el-form-item>
      <el-form-item label="负责人姓名">
        <el-input class="input1"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input class="input1"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input class="input1"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input class="input1"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.input1 {
  width: 200px;
}
.avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>