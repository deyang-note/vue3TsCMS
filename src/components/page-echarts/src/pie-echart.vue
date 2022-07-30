<template>
  <div class="pie-echart">
    <base-echart :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import BaseEchart from "@/base-ui/echarts"
import { IDataType } from "../types"

const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => ({
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "horizontal",
    left: "left"
  },
  series: [
    {
      name: "分类数据",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}))
</script>

<style lang="scss" scoped></style>
