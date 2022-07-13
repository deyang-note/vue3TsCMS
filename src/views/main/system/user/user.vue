<template>
  <div class="user">
    <dy-form :="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import DyForm from "@/base-ui/form"
import { formConfig } from "./config/search.config"
</script>

<style scoped></style>
