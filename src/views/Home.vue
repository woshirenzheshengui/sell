<template>
  <div class="home">
    <el-container>
      <el-header style="height:40px">
        <div class="system-title">后台管理系统</div>
      </el-header>
      <el-container>
        <el-aside width="100px">
          <!--          <el-menu-->
          <!--            class="el-menu-vertical-demo"-->
          <!--            @open="handleOpen"-->
          <!--            :router="true"-->
          <!--            @close="handleClose"-->
          <!--            background-color="#545c64"-->
          <!--            text-color="#fff"-->
          <!--            active-text-color="#fff"-->
          <!--          >-->

          <!--            <el-menu-item index="/user">-->
          <!--              <span >学员列表</span>-->
          <!--            </el-menu-item>-->
          <!--            <el-menu-item index="/advertising">-->
          <!--              <span >广告设置</span>-->
          <!--            </el-menu-item>-->
          <!--          </el-menu>-->

          <el-menu
            :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#fff"
            :router="true">
            <el-menu-item index="/user">
              <!--              <i class="el-icon-menu"></i>-->
              <span slot="title">学员列表</span>

            </el-menu-item>
            <el-menu-item index="/advertising">
              <!--              <i class="el-icon-picture"></i>-->
              <span slot="title">广告设置</span>
            </el-menu-item>
          </el-menu>
          <div class="aside-bottom">
            <img src="../assets/header.png" class="header-icon" alt="">
            <br>
            <span class="user-name">admin</span>
            <br>
            <img src="../assets/loginout.png" class="loginout-icon" alt="">
          </div>
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
    },
    computed: {
      activeIndex() {
        return this.$route.path;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  body {
    padding: 0;
    margin: 0;
  }

  .el-main {
    background-color: rgb(246, 248, 250);
    min-width: 800px;
  }

  .home {
    height: 100%;

    .el-menu-admin:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

  .system-title {
    font-size: 12px;
    /*padding-left: 180px;*/
    color: #fff;
  }

  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: #545c64;
    position: relative;
    /*padding-top:60px;*/
  }

  .el-header {
    height: 40px;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding-left: 20px;
    background: linear-gradient(90deg, rgba(61, 149, 230, 1) 0%, rgba(51, 210, 231, 1) 100%);
  }

  .home .el-menu-admin:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu-item.is-active {
    background: rgba(60, 156, 230, 1) !important;
  }

  .el-menu-item {
    font-size: 14px;
    height: 40px !important;
    line-height: 40px !important;
  }

  .el-menu {
    border-right: none !important;
    padding-top: 30px;
  }

  .header-icon {
    width: 25px;
    margin-bottom: 5px;

  }

  .user-name {
    color: #fff;
    font-size: 12px;
  }

  .loginout-icon {
    width: 28px;
    margin-top: 65px;
  }

  .aside-bottom {
    position: absolute;
    bottom: 25px;
    text-align: center;
    width: 100%;
  }
</style>
