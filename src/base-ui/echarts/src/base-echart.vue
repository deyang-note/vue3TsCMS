<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, withDefaults } from "vue"
import { EChartsOption } from "echarts"

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echarts.init(echartDivRef.value!)

  echartInstance.setOption(props.options)
})
</script>

<style scoped></style>
