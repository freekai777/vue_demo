<template>
  <div class="header-bar">
    <div class="logo-wrap">
      <img src="../assets/logo.png" alt="LOGO" class="logo">
      <strong class="f20">左边的信息</strong>
    </div>
    <div class="user-info-wrap">
      <div class="user-menu">
        <label class="user-logon"></label>
        <span>用户名</span>
        <i class="el-icon-caret-bottom"></i>
        <i class="el-icon-caret-top"></i>
        <div class="user-menu-list">
          <a>abc</a>
          <a>cccc</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped lang="scss">
.header-bar {
  display: flex;
  height: 60px;
  background: #42b983;
  justify-content: space-between;

  .logo-wrap {
    display: flex;
    align-items: center;

    .logo {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }

  .user-menu-list {
    display: none;
  }

  .user-info-wrap {
    display: flex;
    cursor: pointer;

    .user-menu {
      position: relative;
      display: flex;
      align-items: center;

      i.el-icon-caret-bottom,
      i.el-icon-caret-top {
        margin: 0 20px;
      }

      i.el-icon-caret-top {
        display: none;
      }
    }

    .user-menu:hover {
      i.el-icon-caret-bottom {
        display: none;
      }

      i.el-icon-caret-top {
        display: inline-block;
      }

      .user-menu-list {
        display: block;
      }
    }

    .user-menu-list {
      display: none;
      position: absolute;
      right: 10px;
      top: 50px;
      background: #fff;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      width: 100%;

      a {
        display: flex;
        height: 50px;
        align-items: center;
        color: #334455;
      }
      a:hover{
        background: #42b983;
      }
    }


  }

}
</style>
