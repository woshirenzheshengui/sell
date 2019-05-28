<template>
  <div class="home">
    <el-container>
      <el-header style="height:40px">
        <div class="system-title">后台管理系统</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :router="true"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
          >
           
            <el-menu-item index="/user">
              <span >学员列表</span>
            </el-menu-item>
            <el-menu-item index="/advertising">
              <span >广告设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body{
  padding: 0;
  margin: 0;
}
.el-main{
  background-color:rgb(246, 248, 250);
}
.home {
  height: 100%;
   .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
.system-title {
  font-size: 16px;
padding-left: 180px;
  color: #fff;
}
.el-container{
  height: 100%;
}
 .el-aside {
    background-color: #545c64;
  }
.el-header {
  background-color: rgb(89, 142, 202);
  height: 40px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-left: 30px;
  background-color: #545c64;
}
 .home .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
