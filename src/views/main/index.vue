<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24">
        <div class="main-header">
        </div>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="24">
        <carousel></carousel>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="24">
        <div style="height: 10vh;background: #F5F5DC;  display:flex;align-items:center;justify-content: center;">
          <div style="height: 8vh;padding: auto;background: #808080;width:80%"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import carousel from './carousel'
export default {
  components: { carousel },
  name: 'mainContainer',
  data() {
    return {
      name: null
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.main-container {
  @include relative;
  height: 100vh;
  background-color: #333333;
  .main-header {
    background: #FFB6C1;
    height: 10vh;
  }
}
</style>
