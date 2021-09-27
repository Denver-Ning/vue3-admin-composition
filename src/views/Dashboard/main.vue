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
            <div id="echarts-conversion"></div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-echarts">
          <el-card shadow="hover" class="card-item">
            <template #header>
              <div class="card-header">
                <span>Clinch a deal the proportion</span>
              </div>
            </template>
            <div id="echarts-proportion"></div>
          </el-card>
        </el-col>
        <el-col :span="8" class="card-echarts">
          <el-card shadow="hover" class="card-item">
            <template #header>
              <div class="card-header">
                <span>Percent Conversion</span>
              </div>
            </template>
            <div id="echarts-conversion"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
  setup() {
    onMounted(() => {
      methods.getEcharts()
      methods.getCardEcharts()
    })
    const methods = reactive({
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
      getCardEcharts() {
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
      }
    })
    return {
      ...toRefs(dataMap),
      ...toRefs(methods)
    };
  },
});
</script>
<style lang="less" scoped>
.main {
  .main-container {
    padding: 22px;
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
        #echarts-proportion {
          width: 100%;
          height: calc(100% - 69px);
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