<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7"><dy-card title="分类商品数量（饼图）" /></el-col>
      <el-col :span="10"><dy-card title="不同城市商品销量" /></el-col>
      <el-col :span="7"><dy-card title="分类商品数量（玫瑰图）" /></el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <dy-card title="分类商品数量">
          <base-echart :options="options" />
        </dy-card>
      </el-col>
      <el-col :span="12"><dy-card title="分类商品的收藏" /></el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
import DyCard from "@/base-ui/card"
import BaseEchart from "@/base-ui/echarts"

const store = useStore()
store.dispatch("dashboard/getDashboardDataAction")

const options = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
</script>

<style scoped lang="less">
.dashboard {
  .content-row {
    margin-top: 20px;
  }
}
</style>
