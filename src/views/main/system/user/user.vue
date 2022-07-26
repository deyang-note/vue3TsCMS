<template>
  <div class="user">
    <page-search
      :search-form-config="formConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
      @new-btn-click="handleNewData"
      @edit-btn-click="handleEditData"
    />
    <page-modal
      :modal-config="modalConfigRef"
      ref="pageModalRef"
      page-name="users"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { modalConfig } from "./config/modal.config"
import { computed } from "vue"

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
// pageModal相关的hook逻辑
// 1.处理密码的逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = true
}

// 2.动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === "departmentId"
  )
  const roleItem = modalConfig.formItems.find((item) => item.field === "roleId")
  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return {
      title: item.name,
      value: item.id
    }
  })
  roleItem!.options = store.state.entireRole.map((item) => {
    return {
      title: item.name,
      value: item.id
    }
  })
  return modalConfig
})

// 3.调用hook获取公共变量和函数
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
) as any
</script>

<style scoped></style>
