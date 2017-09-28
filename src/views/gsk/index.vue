<template>
  <div>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="main-header">
          <!-- <el-button @click="getAjaxData">Test Ajax</el-button> -->
          <el-row>
            <el-col :span="24" align="center">
              <img src="../../../gifs/gsk.png" style="float:left">
              <h1>Intergrated TCM Insight Database</h1>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" align="right">
              <label>Category</label>
              <el-select v-model="Category" placeholder="Please Select Category" @change="getBenefitData();getTitleData()">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="margin-top:50px;border-bottom:solid 1px gray;">
            <el-col :span="4" :offset="2" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;">TCM</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.tcm }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;">Diseases</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.disease }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;">Beneifts</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.benefits }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;">Food/Med</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.foodMed }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;">TCM Types</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.tcmtype }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row style="margin-top:35px;border-bottom:solid 1px gray;">
            <el-col :span="6" align="center" style="margin-bottom:55px">
              <label>&nbsp;&nbsp;Disease&nbsp;&nbsp;</label>
              <el-select v-model="Category" placeholder="Please Select Category">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6" align="center">
              <label>&nbsp;&nbsp;Benefit&nbsp;&nbsp;</label>
              <el-select v-model="Category" placeholder="Please Select Category">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6" align="center">
              <label>&nbsp;&nbsp;Channel&nbsp;&nbsp;</label>
              <el-select v-model="Category" placeholder="Please Select Category">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6" align="center">
              <label>Food&amp;Med</label>
              <el-select v-model="Category" placeholder="Please Select Category">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getBenefit, getTitile } from 'api/gsk'
export default {
  name: 'gsk-dashboard',
  data() {
    return {
      CategoryOptions: [{
        value: 'RH',
        label: 'RH'
      }, {
        value: 'Pain',
        label: 'Pain'
      }, {
        value: 'Skin Health',
        label: 'Skin Health'
      }, {
        value: 'Oral Health',
        label: 'Oral Health'
      }, {
        value: 'GI',
        label: 'GI'
      }, {
        value: 'Others',
        label: 'Others'
      }
      ],
      Category: 'RH',
      titleData: {}
    }
  },
  methods: {
    getBenefitData() {
      getBenefit().then(response => {
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      })
    },
    getTitleData() {
      console.log('xxxxxxx');
      getTitile(this.Category).then(response => {
        this.titleData = response.data;
        console.log(response.data);
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
  background-color: #123123;
}
</style>
