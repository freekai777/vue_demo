<template>
  <div>
    <!--    <el-menu-->
    <!--        :default-active="activeIndex"-->
    <!--        class="el-menu-demo"-->
    <!--        mode="horizontal"-->
    <!--        @select="handleSelect"-->
    <!--    >-->
    <!--      <el-menu-item index="1">Processing Center</el-menu-item>-->
    <!--      <el-submenu index="2">-->
    <!--        <template #title>Workspace</template>-->
    <!--        <el-menu-item index="2-1">item one</el-menu-item>-->
    <!--        <el-menu-item index="2-2">item two</el-menu-item>-->
    <!--        <el-menu-item index="2-3">item three</el-menu-item>-->
    <!--        <el-submenu index="2-4">-->
    <!--          <template #title>item four</template>-->
    <!--          <el-menu-item index="2-4-1">item one</el-menu-item>-->
    <!--          <el-menu-item index="2-4-2">item two</el-menu-item>-->
    <!--          <el-menu-item index="2-4-3">item three</el-menu-item>-->
    <!--        </el-submenu>-->
    <!--      </el-submenu>-->
    <!--      <el-menu-item index="3" disabled>Info</el-menu-item>-->
    <!--      <el-menu-item index="4">Orders</el-menu-item>-->
    <!--    </el-menu>-->
    <div class="h-6"/>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" v-show="false">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :default-active="menuIndex" :default-openeds="openeds" class="el-menu-vertical-demo" :collapse="isCollapse" @select="handleSelect">
      <div v-for="item in menus" :key="item.index">
        <el-menu-item v-if="!item.children" :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.index">
            {{child.title}}
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import menu from "@/layout/menu";
import {mapGetters} from 'vuex'
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex2: "1",
      activeIndex: "1",
      menuShowTime: 5,
      isCollapse: false,
      menus: [],
      openeds: [],
      routeMap: {}
    }
  },
  computed:{
    ...mapGetters({
      menuIndex: 'getMenuIndex'
    })
  },
  methods: {
    handleSelect(index) {
      // 跳转对应的菜单
      if (this.routeMap[index]) {
        const url = this.routeMap[index]
        this.$router.push(url)
      }
    },
    changeMenus() {
      this.menus = menu.menus
      // 展开所有
      this.openeds = this.menus
          .filter(menu => {
            return menu.children
          }).map(menu => menu.index)
      const flatMenus = this.menus.reduce((prev, current) => {
        if (current.children) {
          return prev.concat(...current.children)
        } else {
          return [...prev, current]
        }
      }, [])
      const routeMap = {}
      flatMenus.forEach(menu => {
        routeMap[menu.index] = menu.url
      })
      this.routeMap = routeMap
    }
  },
  mounted() {
    this.changeMenus()
  }
}
</script>

<style scoped lang="scss">
.el-menu {
  width: 200px;
  // 去掉导航栏
  height: calc(100vh - 60px);
  box-sizing: border-box;
}
</style>
