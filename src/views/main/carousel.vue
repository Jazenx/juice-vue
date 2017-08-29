<template>
  <div class="carousel-container">
    <el-carousel height="90vh">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="carousel-picture" :src="carPic.picUrl">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      carPic: {
        picUrl: 'http://imgstore.cdn.sogou.com/app/a/100540002/456446.jpg'
      }
    }
  },
  methods: {
  }
}
</script>

<style  rel="stylesheet/scss" lang="scss">
.carousel-container {
  background: #00FFFF;
  height: 90vh;
  .carousel-picture {
    width: 100%;
    height: 100%;
  }
}
</style>

