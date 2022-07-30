<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <dy-card title="分类商品数量（饼图）">
          <pie-echart :pie-data="categoryGoodsCount" />
        </dy-card>
      </el-col>
      <el-col :span="10">
        <dy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale" />
        </dy-card>
      </el-col>
      <el-col :span="7">
        <dy-card title="分类商品数量（玫瑰图）">
          <rose-echart :rose-data="categoryGoodsCount" />
        </dy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <dy-card title="分类商品数量">
          <line-echart :="categoryGoodsSale" />
        </dy-card>
      </el-col>
      <el-col :span="12">
        <dy-card title="分类商品的收藏">
          <bar-echart :="categoryGoodsFavor" />
        </dy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "vuex"
import DyCard from "@/base-ui/card"
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/page-echarts"

const store = useStore()
// 请求数据
store.dispatch("dashboard/getDashboardDataAction")

// 获取数据
const categoryGoodsCount = computed(() =>
  store.state.dashboard.categoryGoodsCount.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }))
)
const categoryGoodsSale = computed(() => {
  const xLables: string[] = []
  const values: any[] = []

  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLables.push(item.name)
    values.push(item.goodsCount)
  }

  return { xLables, values }
})
const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []
  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
.dashboard {
  .content-row {
    margin-top: 20px;
  }
}
</style>
