<template>
  <div class="user">
    <page-search :search-form-config="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import { formConfig } from "./config/search.config"
import PageSearch from "@/components/page-search"
import { useStore } from "vuex"

const store = useStore()
store.dispatch("system/getPageListAction", {
  url: "/users/list",
  queryInfo: {
    offset: 0,
    size: 10
  }
})
</script>

<style scoped></style>
