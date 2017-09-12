<template>
  <div class="main-container">
    <el-row>
      <el-col :span="24">
        <div class="main-header">
          <!-- <el-button @click="getAjaxData">Test Ajax</el-button> -->
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
      </el-col>
    </el-row>
    <el-row class="main-box1">
      <el-col :span="24">
        <div> </div>
      </el-col>
    </el-row>
    <el-row class="main-box2">
      <el-col :span="6" :offset="4">
        <div class="box2-info1">
          <div class="box2-info1-detail" v-for="item in 3" :key="item">

          </div>
          <div class="box2-small1">
            <div class="box2-small-detail" v-for="item in 2" :key="item">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="box2-info2">
          <div class="box2-info2-detail">
          </div>
          <div class="box2-small2">
            <div class="box2-small-detail" v-for="item in 2" :key="item">
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="box2-info3">
          <div class="box2-info3-detail">
          </div>
          <div class="box2-small3">
            <div class="box2-small-detail" v-for="item in 2" :key="item">
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="main-box3">
      <el-col :span="18" :offset="3">
        <div class="main-box3-layout">
          <el-row>
            <el-col :span="24" class="main-box3-layout-header">
              <div class="main-box3-layout-header-box"></div>
            </el-col>
            <el-col :span="24">
              <el-col class="main-box3-detail" :span="8" v-for="item in 9" :key="item">
                <div class="main-box3-detail-box">
                </div>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row class="main-box4">
      <el-col :span="16" :offset="4">
        <el-row>
          <el-col :span="14" class="main-box4-part1">
            <div class="main-box4-part1-detail">
            </div>
            <div class="main-box4-part1-detail">
            </div>
          </el-col>
          <el-col :span="10" class="main-box4-part2">
            <el-col :span="12">
              <div class="main-box4-part2-detail">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="main-box4-part2-detail">
              </div>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="main-box5">
      <el-col :span="16" :offset="4">
        <el-row>
          <el-col :span="16" class="main-box5-part1">
            <div class="main-box5-part1-detail">
            </div>
            <div class="main-box5-part1-detail">
            </div>
          </el-col>
          <el-col :span="8" class="main-box5-part2">
            <el-col :span="24">
              <div class="main-box5-part2-detail">
              </div>
            </el-col>
            <el-col :span="24">
              <div class="main-box5-part2-detail">
              </div>
            </el-col>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import carousel from './carousel'
import flopcard from './flop'
import { getMainAjaxData } from 'api/main'
export default {
  components: { carousel, flopcard },
  name: 'mainContainer',
  data() {
    return {
      ajaxData: {
        project: ''
      }
    }
  },
  methods: {
    getAjaxData() {
      getMainAjaxData().then(response => {
        this.ajaxData = response.data;
        console.log(this.ajaxData);
      }).catch(err => {
        console.log(err);
      })
    }
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
    background: #43AC43;
    height: 10vh;
  }
  .main-box1 {
    height: 131px;
  }
  .main-box2 {
    height: 877px;
    background: #DCDCDC;
    .box2-info1 {
      margin-top: 122px;
      height: 397px;
      .box2-info1-detail {
        height: 84px;
        margin-top: 74px;
        background: #808080;
      }
      .box2-small1 {
        margin-top: 220px;
        height: 88px;
        width: 166px;
      }
    }
    .box2-info2 {
      margin-top: 122px;
      height: 702px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .box2-info2-detail {
        height: 397px;
      }
      .box2-small2 {
        height: 88px;
        width: 166px;
      }
    }
    .box2-info3 {
      margin-top: 122px;
      height: 826px;

      .box2-info3-detail {
        height: 397px;
        background: #808080;
      }
      .box2-small3 {
        float: right;
        margin-top: 220px;
        height: 88px;
        width: 166px;
      }
    }
    .box2-small-detail {
      height: 41px;
      width: 166px;
      margin-top: 6px;
      background: #808080;
    }
  }
  .main-box3 {
    height: 1280px;
    background: #ffffff;
    .main-box3-layout {
      height: 1280px;
      .main-box3-layout-header {
        display: flex;
        justify-content: center;
        .main-box3-layout-header-box {
          margin-top: 60px;
          height: 52px;
          width: 400px;
          background: #DCDCDC;
        }
      }
      .main-box3-detail {
        height: 330px;
        display: flex;
        margin-top: 30px;
        justify-content: center;
        align-items: center;
        .main-box3-detail-box {
          height: 60%;
          width: 70%;
          background: #A9A9A9;
        }
      }
    }
  }
  .main-box4 {
    height: 197px;
    background: #43AC43;
    .main-box4-part1 {
      margin-top: -30px;
      .main-box4-part1-detail {
        margin-top: 27px;
        height: 32px;
        width: 80%;
        background: #ffffff;
      }
    }
    .main-box4-part2 {
      margin-top: -53px;
      height: 100px;
      .main-box4-part2-detail {
        float: right;
        height: 160px;
        width: 160px;
        background: #ffffff;
      }
    }
  }
  .main-box5 {
    height: 268px;
    .main-box5-part1 {
      margin-top: 55px;
      .main-box5-part1-detail {
        margin-top: 19px;
        height: 51px;
        width: 60%;
        background: #808080;
      }
    }
    .main-box5-part2 {
      margin-top: 55px;
      height: 100px;
      .main-box5-part2-detail {
        float: right;
        margin-top: 19px;
        height: 51px;
        width: 100%;
        background: #808080;
      }
    }
  }
}
</style>
