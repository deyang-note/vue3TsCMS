import * as echarts from "echarts"

import chinaMapData from "../data/china.json"
echarts.registerMap("china", chinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOption = (options: echarts.EChartsCoreOption) => {
    echartInstance.setOption(options)
  }

  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  const setResize = () => {
    echartInstance.resize()
  }

  return {
    echartInstance,
    setOption,
    setResize
  }
}
