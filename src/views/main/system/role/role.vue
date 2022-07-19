<template>
  <div class="role">
    <page-content :content-table-config="contentTableConfig" page-name="role" />
  </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped></style>
