<template>
  <div class="user">
    <dy-form :="formConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import DyForm from "@/base-ui/form"
import { formConfig } from "./config/search.config"
import { ref } from "vue"

const formData = ref({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: ""
})
</script>

<style scoped></style>
