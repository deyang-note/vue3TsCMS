<template>
  <div class="menu">
    <page-content
      :content-table-config="contentTableConfig"
      page-name="menu"
    ></page-content>
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped></style>
