<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" :size="20">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"

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
}
</style>
