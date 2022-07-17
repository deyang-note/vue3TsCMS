<template>
  <div class="user">
    <page-search :search-form-config="formConfig" />
    <div class="content">
      <dy-table
        :list-data="userList"
        :prop-list="propList"
        title="垃圾"
        :show-index-column="showIndexColumn"
        :show-select-column="showSelectColumn"
        @selectionChange="selectionChange"
      >
        <!-- 1.header中的插槽 -->
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
          <!--          <el-button :icon="Refresh">刷新</el-button>-->
        </template>
        <template #footer>
          <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
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
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue"
import { formConfig } from "./config/search.config"
import { useStore } from "vuex"
import { Delete, Edit, Refresh } from "@element-plus/icons-vue"

import PageSearch from "@/components/page-search"
import DyTable from "@/base-ui/table"

const store = useStore()
store.dispatch("system/getPageListAction", {
  url: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = computed(() => store.state.system.userList)
// const userCount = computed(() => store.state.system.userCount)

const propList = [
  { prop: "name", label: "用户名", minWidth: "100" },
  { prop: "realname", label: "真实姓名", minWidth: "100" },
  { prop: "cellphone", label: "手机号码", minWidth: "100" },
  { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "250",
    slotName: "createAt"
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "250",
    slotName: "updateAt"
  },
  { label: "操作", minWidth: "120", slotName: "handler" }
]

const showIndexColumn = true
const showSelectColumn = true

const selectionChange = (value: any) => {
  console.log(value)
}

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
