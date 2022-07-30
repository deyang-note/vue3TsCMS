<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, withDefaults, watchEffect } from "vue"
import useEchart from "../hooks/useEchart"

const props = withDefaults(
  defineProps<{
    options: echarts.EChartsOption
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
  const { setOption } = useEchart(echartDivRef.value!)
  watchEffect(() => setOption(props.options))
})
</script>

<style scoped></style>
