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
      page-name="role"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

import PageModal from "@/components/page-modal"

import { formConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import { usePageModal } from "@/hooks/use-page-modal"

const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal() as any
</script>

<style scoped></style>
