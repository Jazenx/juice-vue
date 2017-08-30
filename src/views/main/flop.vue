<template>
  <div class="card-container">
    <div class="card" v-for="cardPic in cardPics" :key="cardPic.backUrl">
      <div class="card-back"><img :src="cardPic.backUrl" /></div>
      <div class="card-font"><img :src="cardPic.fontUrl" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'flopcard',
  data() {
    return {
      cardPics: [
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card6-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card6.png'
        },
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card5-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card5.png'
        },
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card4-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card4.png'
        },
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card3-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card3.png'
        },
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card2-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card2.png'
        },
        {
          backUrl: 'http://9yin.woniu.com/static/web201588/images/card1-back.png',
          fontUrl: 'http://9yin.woniu.com/static/web201588/images/card1.png'
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
.card-container {
  @include relative;
  width: 1100px;
  margin: 0 auto;
  .card {
    margin-right: 15px;
    width: 200px;
    height: 380px;
    float: left;
    .card-font,
    .card-back {
      position: absolute;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      -webkit-transform-style: preserve-3d;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
    }
    .card-font,
    .card-back {
      -webkit-transform: rotateY( 0deg);
      -moz-transform: rotateY( 0deg);
      -o-transform: rotateY( 0deg);
      transform: rotateY( 0deg);
    }
    .card-font,
    .card-back {
      -webkit-transform: rotateY( -180deg);
      -moz-transform: rotateY( -180deg);
      -o-transform: rotateY( -180deg);
      transform: rotateY( -180deg);
    }

    .card:hover .card-font {
      -webkit-transform: rotateY( 180deg);
      -moz-transform: rotateY( 180deg);
      -o-transform: rotateY( 180deg);
      transform: rotateY( 180deg);
    }

    .card:hover .card-back {
      -webkit-transform: rotateY( 0deg);
      -moz-transform: rotateY( 0deg);
      -o-transform: rotateY( 0deg);
      transform: rotateY( 0deg);
    }
  }
}
</style>

