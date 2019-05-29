<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="宣传链接广告位图片">
        <div class="content">
          <div class="box">
            <span class="label">广告示例照片:</span>
            <div class="right-box">
            <img src="../../assets/example.png" alt>
            </div>
          </div>
          <div class="box2">
            <span class="label">请上传广告图片:</span>
            <div class="right-box upload-right">
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
          </div>
          <div class="button">
            <el-button type="primary" size="small">提交</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已参与用户的奖励提示">
        <div class="content">
          <div class="box">
            <span class="label">奖励提示示例图片:</span>
            <div class="right-box">
              <img src="../../assets/example.png" alt>
            </div>
          </div>
          <div class="box2">
            <span class="label">请上传奖励提示图片:</span>
            <div class="right-box upload-right">
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
          </div>
          <div class="button">
            <el-button type="primary" size="small">提交</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="音乐设置">
        <div class="content">
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
            <span class="tip">点击上传MP3格式的音乐，不能超过5M</span>
          </div>

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
    padding-bottom:30px;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /*padding-left: 299px;*/
  }

  .content {
    padding: 30px 40px;
    min-height: 500px;
  }

  .label {
    font-size: 14px;
    color: #333;
    width: 150px;
    display: inline-block;
  }
  .right-box{
    display: inline-block;
    vertical-align: top;
  }
  .upload-right{
    padding-left:7px;
  }
  .tip{
    font-size:14px;
    margin-left:15px;
  }


    /*.box p {*/
  /*  display: inline-block;*/
  /*  margin-right: 30px;*/
  /*}*/

  /*.p2 {*/
  /*  padding-right: 15px;*/
  /*}*/

  /*.box2 {*/
  /*  padding: 50px 0;*/
  /*  width: 100%;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*}*/

  .el-upload--picture-card {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }

  .avatar-uploader {
    display: inline-block;
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
    margin:70px 150px 50px 150px;

  }

  /*.box3 {*/
  /*  padding: 50px 299px;*/
  /*  width: 100%;*/
  /*  display: flex;*/
  /*  align-items: flex-end;*/
  /*}*/
</style>
