<template>
  <div class="page-content">
    <dy-table
      :list-data="dataList"
      :list-count="dataCount"
      :="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">
          新建用户
        </el-button>
      </template>
      <template #footer></template>
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            link
            type="primary"
            :icon="Edit"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            link
            type="primary"
            :icon="Delete"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <!-- 动态插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </dy-table>
  </div>
</template>

<script setup lang="ts">
import DyTable from "@/base-ui/table"
import { usePermission } from "@/hooks/use-permission"
import { Delete, Edit } from "@element-plus/icons-vue"
import { emit } from "process"
import { computed, ref, watch } from "vue"
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

// 0.获取操作的权限
const isCreate = usePermission(props.pageName, "create")
const isUpdate = usePermission(props.pageName, "update")
const isDelete = usePermission(props.pageName, "delete")
const isQuery = usePermission(props.pageName, "query")

// 1.双向绑定 pageInfo
const pageInfo = ref({
  currentPage: 1,
  pageSize: 10
})
watch(pageInfo, () => getPageData())

// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
defineExpose({ getPageData })
// 3.从vuex中获取数据
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === "status") return false
    if (item.slotName === "createAt") return false
    if (item.slotName === "updateAt") return false
    if (item.slotName === "handler") return false
    return true
  }
)

const emits = defineEmits(["newBtnClick", "editBtnClick"])

// 5.删除/编辑/新建操作
const handleDeleteClick = (item: any) => {
  console.log(item)
  store.dispatch("system/deletePageDataAction", {
    pageName: props.pageName,
    id: item.id
  })
}

const handleNewClick = () => emits("newBtnClick")

const handleEditClick = (item: any) => emits("editBtnClick", item)
</script>
<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
