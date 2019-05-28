<template>
  <div class="home">
    <el-container>
      <el-header style="height:40px">
        <div class="system-title">后台管理系统</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
          >
           
            <el-menu-item index="2">
              <span >学员列表</span>
            </el-menu-item>
            <el-menu-item index="3">
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
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.home {
  height: 100%;
}
.system-title {
  font-size: 16px;

  color: #fff;
}
.el-header {
  background-color: rgb(89, 142, 202);
  height: 40px;
  display: flex;
  justify-content: baseline;
  align-items: center;
  padding-left: 30px;
}
 .home .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
