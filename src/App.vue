<template>
<!--  <div id="app">
&lt;!&ndash;    <img alt="Vue logo" src="./assets/logo.png">&ndash;&gt;
&lt;!&ndash;    <HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;
    <BookCart parent-val="父组件的值" @printChildValInChild="printChildVal" ref="firstChild"></BookCart>
    <hr/>
    <button @click="callChildMethod">refs方式访问子组件方法</button>
    <button @click="callChildMethod2">$children方式访问子组件方法</button>
    <hr/>
    <h1>插槽的使用</h1>
    <slot-basic-part>这是一个插槽</slot-basic-part>
&lt;!&ndash;展示slotBasicPart插槽中定义的默认值    &ndash;&gt;
    <slot-basic-part>
      <template v-slot:leftSlot>
        替换左边具名插槽的值...
      </template>
    </slot-basic-part>
  </div>-->

  <div id="app" >
    <header-bar></header-bar>
    <div class="main-content">
      <nav-bar class="side-bar"></nav-bar>
      <div v-if="$route.meta.transition" class="app-main">
        <el-scrollbar
            style="height: 100%; width: 100%"
            :native="false"
            wrap-style="overflow-x: hidden;"
        >
          <transition
              name="fade-transform"
              mode="out-in"
              :after-enter="afterEnter"
          >
            <router-view :key="$route.fullPath" class="router-view" />
          </transition>
        </el-scrollbar>
      </div>
      <div v-else class="app-main">
        <router-view :key="$route.fullPath" class="router-view" />
      </div>
    </div>

  </div>
</template>

<script>
// import BookCart from './components/BookCart'
// import SlotBasicPart from './components/SlotBasicPart'
import NavBar from './layout/NavBar'
import HeaderBar from "@/layout/HeaderBar";
export default {
  name: 'App',
  components: {
    NavBar,
    HeaderBar
    // HelloWorld,
    // BookCart,
    // SlotBasicPart
  },
  data(){
    return {
      parentMsg: '父组件的msg...'
    }
  },
  methods:{
    printChildVal (vv) {
      alert(vv)
    },
    callChildMethod(){
      // 父组件调用子组件的方法 --> $refs形式
      this.$refs.firstChild.calledByParent()
    },
    callChildMethod2(){
      // 父组件访问子组件 --> $children形式
      let cArr = this.$children
      for(let item of cArr){
        item.printMsg()
      }
    },
    afterEnter () {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  .main-content{
    display: flex;
    //height: calc(100vh - 10px);
    .side-bar{
      width: 200px;
      background: #ffffff;
      z-index: 1;
    }
    .app-main{
      margin: 20px;
      min-width: 600px;
      flex: 1;
      overflow: hidden;
    }
  }

}
</style>
