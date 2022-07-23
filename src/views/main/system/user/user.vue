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
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { usePageSearch } from "@/hooks/use-page-search"

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped></style>
