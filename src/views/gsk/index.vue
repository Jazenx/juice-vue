<template>
  <div>
    <el-row>
      <el-col>
        <div class="main-header">
          <!-- <el-button @click="getAjaxData">Test Ajax</el-button> -->
          <el-row>
            <el-col :span="24" align="center">
              <img src="../../../gifs/gsk.png" style="float:left">
              <h1>Intergrated TCM Ingredient Database</h1>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" align="right">
              <label>Category</label>
              <el-select v-model="Category" placeholder="Please Select Category" @change="getDiseaseData();getTitleData();getMainTable()">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row style="margin-top:50px;border-bottom:solid 1px gray;">
            <el-col :span="4" :offset="2" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;color: white">TCM</span>
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
                  <span style="font-size: 24px;color: white">Diseases/Area</span>
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
                  <span style="font-size: 24px;color: white">Symptom/Purpose</span>
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
                  <span style="font-size: 24px;color: white">TCM Beneifts</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.tcmtype }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4" style="padding:10px">
              <el-card align="center" :body-style="{ padding: '0px' }">
                <div style="background: #808080;height:40px;display: flex;justify-content: center;align-items: center;">
                  <span style="font-size: 24px;color: white">Food/Med</span>
                </div>
                <div style="padding: 14px;">
                  <div class="bottom clearfix">
                    <span style="font-size: 24px;">{{ titleData.foodMed }}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row style="margin-top:35px;border-bottom:solid 1px gray;">
            <el-col :span="8" align="center" style="margin-bottom:55px">
              <label style="font-size: 20px">&nbsp;&nbsp;Disease/Area&nbsp;&nbsp;</label>
              <el-select v-model="Disease" placeholder="Please Select Disease" @change="getBenefitData();getMainTable()" style="width:50%">
                <el-option v-for="item in DiseaseOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" align="center">
              <label style="font-size: 20px">&nbsp;&nbsp;Symptom/Purpose&nbsp;&nbsp;</label>
              <el-select v-model="Benefit" placeholder="Please Select Category" @change="getMainTable()" style="width:50%">
                <el-option v-for="item in BenefitOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" align="center">
              <label style="font-size: 20px">Food&amp;Med</label>
              <el-select v-model="FoodMed" placeholder="Please Select Category" @change="getMainTable()" style="width:50%">
                <el-option v-for="item in FoodMedOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <h3>Top 30 TCM</h3>
          <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="努力加载中..." border fit highlight-current-row style="width: 100%;margin-top:10px">
            <el-table-column align="center" label="TCM Name">
              <template scope="scope">
                <span>{{ scope.row.tcm_Name }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="English Name">
              <template scope="scope">
                <span>{{ scope.row.english_Name }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Latin Name">
              <template scope="scope">
                <span>{{ scope.row.latin_Name }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Food/Med" :render-header="foodmedColumShow" width="150">
              <template scope="scope">
                <span>{{ scope.row.foodMed }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="UGC Rank" sortable prop="ugc_Rank" :render-header="ugcColumShow" width="150">
              <template scope="scope">
                <span>{{ scope.row.ugc_Rank }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="Usage Rank" sortable prop="usage_RANK" :render-header="usageColumShow" width="160">
              <template scope="scope">
                <span>{{ scope.row.usage_RANK }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Known" :render-header="knownColumShow" width="110">
              <template scope="scope">
                <span>{{ scope.row.known }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Related" :render-header="relatedColumShow" width="110">
              <template scope="scope">
                <span>{{ scope.row.related }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Tried" :render-header="triedColumShow" width="100">
              <template scope="scope">
                <span>{{ scope.row.tried }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Frequently Used" :render-header="frequentlyUsedColumShow" width="120" >
              <template scope="scope">
                <span>{{ scope.row.frequentlyUsed }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Scientific Evidence" :render-header="scientificEvidenceColumShow" width="120" >
              <template scope="scope">
                <span>{{ scope.row.scientificEvidence }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="Key Benefit" :render-header="keyBenefitsColumShow" width="120" >
              <template scope="scope">
                <span>{{ scope.row.benefits }}</span>
              </template>
            </el-table-column>
          </el-table>
          <el-row style="margin-top:20px">
          <p style="float:left;margin:10px;font-size: 22px;">Note:This database has been commissioned to provide an high-level understanding of TCM ingredients association with specified diseases among consumers in China.
To produce such results, over 3 million records have been collected from major online platforms, such as Weibo, Wechat, Zhihu and Chunyuyisheng etc..., also part of the findings are from quantitative study with 750 respondents. In addition, home visits and professional visits have also been conducted to validation our findings</p>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getBenefit, getTitile, getDisease, getTable } from 'api/gsk'
export default {
  name: 'gsk-dashboard',
  data() {
    return {
      CategoryOptions: [
        {
          value: 'All',
          label: 'All'

        }, {
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
      ChannelOptions: [{
        value: 'baiduzhidao_answer',
        label: 'baiduzhidao_answer'
      }, {
        value: 'baiduzhidao_question',
        label: 'baiduzhidao_question'
      }, {
        value: 'wechat',
        label: 'wechat'
      }, {
        value: 'weibo',
        label: 'weibo'
      }, {
        value: 'zhihu_answer',
        label: 'zhihu_answer'
      }, {
        value: 'zhihu_answer_comment',
        label: 'zhihu_answer_comment'
      }, {
        value: 'zhihu_question',
        label: 'zhihu_question'
      }
      ],
      FoodMedOptions: [
        {
          value: 'All',
          label: 'All'

        }, {
          value: 'yes',
          label: 'yes'
        }, {
          value: 'no',
          label: 'no'
        }
      ],
      listLoading: true,
      DiseaseOptions: [],
      BenefitOptions: [],
      Category: 'All',
      Disease: '怕冷',
      Benefit: '颤栗',
      Channel: 'All',
      FoodMed: 'All',
      titleData: {},
      list: []
    }
  },
  methods: {
    foodmedColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Ingredients can be recognized as Food as well as Medicine in accordance with government guideline',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    ugcColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Ranking calculated based on number of TCM ingredient mentions from social, and medical vertical forums',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    usageColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Ranking of Quantitative findings, it is calculated based on percentage of public claim such ingredients that are being used frequently',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    knownColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Quantitative findings, indicates percentage of public claim KNOWN such ingredients',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    relatedColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Quantitative findings, indicates percentage of public claim they believe such ingredients is related to corresponding Symptom',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    triedColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Quantitative findings, indicates percentage of public claim they have tried such ingredients to treat corresponding Symptom',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    frequentlyUsedColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Quantitative findings, indicates percentage of public claim they frequently use such ingredients to treat corresponding Symptom',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    scientificEvidenceColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Information gather from clinical studies',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    keyBenefitsColumShow(createElement, { column }) {
      return createElement('el-tooltip', {
        attrs: {
          effect: 'dark',
          content: 'Please note: Only one main benefit for TCM is displayed, it has no direct correlation to corresponding Symptom',
          placement: 'top'
        }
      }, [createElement('a', [column.label, createElement('span', {
        attrs: {
          class: 'caret-wrapper'
        }
      }, [createElement('i', {
        attrs: {
          class: 'el-icon-information'
        }
      })]
      )])]);
    },
    getDiseaseData() {
      getDisease(this.Category).then(response => {
        this.DiseaseOptions = response.data;
        this.Disease = response.data[0].value;
      }).catch(err => {
        console.log(err);
      })
    },
    getBenefitData() {
      getBenefit(this.Disease).then(response => {
        this.BenefitOptions = response.data;
        this.Benefit = response.data[0].value;
      }).catch(err => {
        console.log(err);
      })
    },
    getTitleData() {
      getTitile(this.Category).then(response => {
        this.titleData = response.data;
      }).catch(err => {
        console.log(err);
      })
    },
    getMainTable() {
      this.listLoading = true;
      console.log(this.Category, this.Disease, this.Benefit, this.Channel, this.FoodMed);
      getTable(this.Category, this.Disease, this.Benefit, this.Channel, this.FoodMed).then(response => {
        this.list = response.data;
        this.listLoading = false;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.getTitleData();
    this.getDiseaseData();
    this.getBenefitData();
    this.getMainTable();
    // this.listLoading = false;
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
