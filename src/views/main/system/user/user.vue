<template>
  <div class="user">
    <page-search :search-form-config="formConfig" />
    <page-content
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
</script>

<style scoped></style>
