<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24">
        <div class="main-header">
          <el-button>注册</el-button>
        </div>
      </el-col>
    </el-row>
     <el-row>
      <el-col :span="24">
        <carousel></carousel>
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
