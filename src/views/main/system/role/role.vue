<template>
  <div class="role">
    <page-search :search-form-config="formConfig" />
    <page-content
      :content-table-config="contentTableConfig"
      page-name="role"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfig"
      :other-info="otherInfo"
      page-name="role"
      :default-info="defaultInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, nextTick } from "vue"
import { useStore } from "vuex"
import { mapMenuLeafKeys } from "@/utils/map-menus"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

import PageModal from "@/components/page-modal"

import { formConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import { usePageModal } from "@/hooks/use-page-modal"
import { ElTree } from "element-plus"

// 1.处理 pageModal的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = mapMenuLeafKeys(item.menuList)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}

const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  undefined,
  editCallback
) as any
const store = useStore()
const menus = computed(() => store.state.entireMenu)
const otherInfo = ref({})
const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 20px;
}
</style>
