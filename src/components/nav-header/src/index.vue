<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" :size="20">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <dy-breadcrumb />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"
import UserInfo from "./user-info.vue"
import DyBreadcrumb from "@/base-ui/breadcrumb"

// eslint-disable-next-line no-undef
const emit = defineEmits(["foldChange"])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .el-icon {
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
