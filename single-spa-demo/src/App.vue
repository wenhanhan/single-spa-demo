<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-container style="height:100vh">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                  <el-menu :router="true" >
                    <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.router"><i class="el-icon-menu"></i>{{item.name}}</el-menu-item>
                  </el-menu>  
                </el-aside>
                <el-main> 
                  <div id="single-vue">
                    <div id="react-app"></div>
                    
                    <div id="vue">
                      <router-view/>
                    </div>
                  </div>
                </el-main>
            </el-container>
    </el-container>
  </div>
</template>
<script>
import appConfig from '../config/appConfig';
console.log(appConfig)
export default {
  name: 'App',
  data(){
    return{
      menu:appConfig
    }
  },
  computed: {
        // 当前路由处理
  },
    mounted(){
      console.log(this.$route.path)
    }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
