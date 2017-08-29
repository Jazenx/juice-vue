<template>
  <div class="carousel-container">
    <el-carousel height="90vh" indicator-position="none">
      <el-carousel-item v-for="carPic in carPic" :key="carPic">
        <img class="carousel-picture" :src="carPic.picUrl">
      </el-carousel-item>
    </el-carousel>
    <el-row class="carousel-buttom">
      <el-col :span="24">
        <div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      carPic: [
        {
          picUrl: 'http://imgstore.cdn.sogou.com/app/a/100540002/456446.jpg'
        },
        {
          picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504005326531&di=795492f66d74ba23d188272c263b63c4&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2Fallimg%2F111215%2F111634N48-7.jpg'
        },
        {
          picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504005399620&di=6e45ae40c19c939909ac31a482551ace&imgtype=0&src=http%3A%2F%2Fwww.fengdu100.com%2Fuploads%2Fallimg%2F160225%2F19431G126-2.jpg'
        },
        {
          picUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504005470733&di=d924b0760e8cd489d4b264e5d1d4b206&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2014%2Fxll%2F01%2F24%2F3%2Fpaoche1.jpg'
        }
      ]
    }
  },
  methods: {
  }
}

</script>

<style  rel="stylesheet/scss" lang="scss">
@import "src/styles/mixin.scss";
.carousel-container {
  @include relative;
  height: 90vh;
  .carousel-picture {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .carousel-buttom {
    height: 10vh;
    background: #333333;
    z-index: 99999;
    margin-top: -10vh;
    filter:alpha(Opacity=80);
    -moz-opacity:0.5;
    opacity: 0.5;
  }
}
</style>

