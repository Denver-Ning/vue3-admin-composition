<template>
  <div class="main">
    <div class="main-container">
      <el-row :gutter="20">
        <el-col
          class="card-box"
          :span="6"
          v-for="(item,index) in cardInfo"
          :key="item.id"
          @click="cardChange()"
        >
          <el-card shadow="hover" class="card-item">
            <div class="card-title">Access number</div>
            <el-divider></el-divider>
            <div class="card-content">
              <div class="card-icon">
                <img src="@/assets/card.png" alt />
              </div>
              <div class="card-detail">
                <div class="card-text">{{ item.text }}</div>
                <div class="card-num">{{ item.num }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div id="main"></div>
      <el-row :gutter="30">
        <el-col :span="8" class="card-echarts">
          <el-card shadow="hover" class="card-item">
            <template #header>
              <div class="card-header">
                <span>Percent Conversion</span>
              </div>
            </template>
            <div id="echarts-conversion" class="echarts"></div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-echarts">
          <el-card shadow="hover" class="card-item">
            <template #header>
              <div class="card-header">
                <span>Clinch a deal the proportion</span>
              </div>
            </template>
            <div id="echarts-proportion" class="echarts"></div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-echarts">
          <el-card shadow="hover" class="card-item">
            <template #header>
              <div class="card-header">
                <span>Percent Conversion</span>
              </div>
            </template>
            <div id="echarts-hold" class="echarts"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import * as echarts from 'echarts';
import myServer from '../../apis/index';
export default defineComponent({
  setup() {
    onMounted(() => {
      methods.getEcharts()
      methods.getCardEchartsTwo()
      methods.getCardEchartsOne()
      methods.getCardEchartsThree()
      methods.getCardMsg()
    })
    const methods = reactive({
      getCardMsg() {
        (myServer as any).shop.shopList().then((res: any) => {
        })
      },
      getEcharts() {
        type EChartsOption = echarts.EChartsOption;
        var chartDom = document.getElementById('main')!;
        echarts.init(chartDom).dispose();
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;
        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          legend: {
            data: ['predict', 'practical']
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: dataMap.echarts[0],
              type: 'line',
              smooth: true,
              name: 'predict'
            },
            {
              data: dataMap.echarts[1],
              type: 'line',
              smooth: true,
              name: 'practical'
            }
          ]
        };
        option && myChart.setOption(option);
      },
      cardChange() {
        const arr = [
          {
            0: [80, 90, 80, 60, 110, 130, 80],
            1: [60, 70, 90, 100, 90, 80, 110]
          },
          {
            0: [75, 70, 90, 80, 90, 80, 110],
            1: [95, 90, 75, 60, 110, 130, 80]
          },
          {
            0: [96, 70, 90, 80, 130, 80, 110],
            1: [80, 90, 80, 60, 110, 130, 70]
          },
          {
            0: [73, 90, 80, 60, 110, 130, 70],
            1: [90, 70, 90, 80, 130, 80, 110]
          },
        ]
        dataMap.echarts = arr[Math.floor(Math.random() * 4)]
        methods.getEcharts()
      },
      getCardEchartsTwo() {
        type EChartsOption = echarts.EChartsOption;
        var chartDom = document.getElementById('echarts-proportion')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;
        option = {
          legend: {
            top: 'bottom',
            data: [
              'Clothing',
              'Electronics',
              'Furniture',
              'Cosmetics',
              'Serving',
            ]
          },
          series: [
            {
              name: 'Area Mode',
              type: 'pie',
              radius: [30, 100],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [
                { value: 35, name: 'Clothing' },
                { value: 28, name: 'Electronics' },
                { value: 26, name: 'Furniture' },
                { value: 30, name: 'Cosmetics' },
                { value: 22, name: 'Serving' }
              ]
            }
          ]
        };
        option && myChart.setOption(option);
      },
      getCardEchartsOne() {
        type EChartsOption = echarts.EChartsOption;
        var chartDom = document.getElementById('echarts-conversion')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;
        option = {
          color: ["#4967d1", "#58caeb"],
          legend: {
            top: 'bottom',
            data: ['Allocated Budget', 'Actual Spending']
          },
          radar: {
            indicator: [
              { name: 'Sales', max: 130 },
              { name: 'Administration', max: 130 },
              { name: 'Information Technology', max: 130 },
              { name: 'Customer Support', max: 130 },
              { name: 'Development', max: 130 },
              { name: 'Marketing', max: 130 }
            ],
            radius: 100
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              symbol: 'none',
              areaStyle: {
                opacity: 1,
              },
              data: [
                {
                  value: [70, 70, 70, 85, 48, 71],
                  name: 'Allocated Budget',
                  areaStyle: {
                    color: '#4967d1'
                  }
                },
                {
                  value: [91, 39, 85, 66, 69, 41],
                  name: 'Actual Spending',
                  areaStyle: {
                    color: '#58caeb'
                  }
                }
              ],
              lineStyle: {
                width: 0
              }
            }
          ]
        };
        option && myChart.setOption(option);
      },
      getCardEchartsThree() {
        type EChartsOption = echarts.EChartsOption;
        var chartDom = document.getElementById('echarts-hold')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;
        option = {
          color: ['#76dffc', '#5470c6', '#92cc76'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            top: 'bottom'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Email',
              type: 'bar',
              stack: 'Ad',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'hahah',
              type: 'bar',
              stack: 'Ad',
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };

        option && myChart.setOption(option);

      }
    })

    const dataMap = reactive({
      cardInfo: [
        { text: 'New Visits', num: '100,124', id: 1 },
        { text: 'Download', num: '8000', id: 2 },
        { text: 'Volume Transaction', num: '81,124', id: 3 },
        { text: 'Fixture Number', num: '29,124', id: 4 },
      ],
      echarts: {
        0: [80, 90, 80, 60, 110, 130, 80],
        1: [60, 70, 90, 80, 90, 80, 110]
      },
      shopList: []
    })
    return {
      ...toRefs(dataMap),
      ...toRefs(methods)
    };
  },
});
</script>
<style lang="less" scoped>
@import "@/styles/common.less";
.main {
  .main-container {
    padding: @globalPadding;
    background-color: #f2f7ff;
    position: relative;
    height: calc(100% - 44px);
    .card-box {
      .card-item {
        background-color: #fff;
        height: 150px;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        .card-title {
          padding: 5px 12px;
          font-size: 20px;
          font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        }
        .card-content {
          flex: 1;
          padding: 10px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .card-icon {
            img {
              width: 60px;
            }
          }
          .card-detail {
            .card-text {
              line-height: 18px;
              color: rgba(0, 0, 0, 0.45);
              font-size: 18px;
              margin-bottom: 12px;
            }
            .card-num {
              font-size: 20px;
              color: #666;
              font-weight: 700;
            }
          }
        }
      }
    }
    #main {
      width: 100%;
      height: 400px;
      background-color: #fff;
      margin-top: 50px;
      padding-top: 20px;
      border-radius: 15px;
    }
    .card-echarts {
      margin-top: 50px;
      .card-item {
        background-color: #fff;
        height: 500px;
        border-radius: 10px;
        cursor: pointer;
        // border: none;
        .echarts {
          width: 100%;
          height: calc(100% - 90px);
        }
      }
    }
  }
}
/deep/ .el-card__body {
  height: 100%;
  padding: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>