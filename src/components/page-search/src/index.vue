<template>
  <div class="page-search">
    <dy-form :="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" :icon="Refresh">重制</el-button>
          <el-button type="primary" :icon="Search">搜索</el-button>
        </div>
      </template>
    </dy-form>
  </div>
</template>

<script setup lang="ts">
import DyForm from "@/base-ui/form"
import { ref } from "vue"
import { Search, Refresh } from "@element-plus/icons-vue"

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const formData = ref({
  id: "",
  name: "",
  password: "",
  sport: "",
  createTime: ""
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
