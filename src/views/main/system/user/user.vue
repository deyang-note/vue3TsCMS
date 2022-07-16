<template>
  <div class="user">
    <page-search :search-form-config="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config"
import PageSearch from "@/components/page-search"
</script>

<style scoped></style>
