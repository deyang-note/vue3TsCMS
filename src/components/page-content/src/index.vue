<template>
  <div class="page-content">
    <dy-table :list-data="dataList" :="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
        <!--          <el-button :icon="Refresh">刷新</el-button>-->
      </template>
      <template #footer>
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          small="small"
          background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        />
      </template>
      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button link type="primary" :icon="Edit">编辑</el-button>
          <el-button link type="primary" :icon="Delete">删除</el-button>
        </div>
      </template>
    </dy-table>
  </div>
</template>

<script setup lang="ts">
import DyTable from "@/base-ui/table"
import { Delete, Edit, Refresh } from "@element-plus/icons-vue"
import { computed, ref } from "vue"
import { useStore } from "vuex"

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const store = useStore()
store.dispatch("system/getPageListAction", {
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
// const userCount = computed(() => store.state.system.userCount)
</script>
<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
