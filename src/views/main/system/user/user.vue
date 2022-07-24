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
    />
    <page-modal :modal-config="modalConfig" />
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { usePageSearch } from "@/hooks/use-page-search"
import { modalConfig } from "./config/modal.config"

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped></style>
