<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="宣传链接广告位图片">
        <div class="box">
          <p>广告示例照片:</p>
          <img src="../../assets/微信图片_20190527120156.png" alt>
        </div>
        <div class="box2">
          <span class="p2">请上传广告图片:</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
        <div class="button">
          <el-button type="primary">提交</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已参与用户的奖励提示">配置管理</el-tab-pane>
      <el-tab-pane label="音乐设置">
         <div class="box3">

            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span style="margin-left:15px;">点击上传MP3格式的音乐，不能超过5M</span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-left: 299px;
}
.box p {
  display: inline-block;
  margin-right: 30px;
}
.p2 {
  padding-right: 15px;
}
.box2 {
  padding: 50px 299px;
  width: 100%;
  display: flex;
  align-items: center;
}
.el-upload--picture-card {
  width: 80px;
  height: 80px;
  line-height: 80px;
}
.avatar-uploader{
     border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
.avatar {
  width: 78px;
  height: 78px;
  display: block;
}
.button {
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
}
.box3 {
   padding: 50px 299px;
  width: 100%;
  display: flex;
  align-items:flex-end;
}
</style>