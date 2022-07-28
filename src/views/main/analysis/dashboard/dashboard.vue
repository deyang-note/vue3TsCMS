<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '600px', height: '600px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import * as echarts from "echarts"

const divRef = ref<HTMLElement>()
onMounted(() => {
  // 1.初始化 echarts 的实例
  const echartsInstance = echarts.init(divRef.value!, "dark", {
    renderer: "svg"
  })
  // 2.编写配置文件
  const option = {
    title: {
      text: "ECharts 入门示例",
      subtext: "伞兵一号卢本伟申请出战"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  // 3.绘制图表
  echartsInstance.setOption(option)
})
</script>

<style scoped></style>
