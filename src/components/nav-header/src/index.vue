<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick" :size="20">
      <Expand v-if="isFold" />
      <Fold v-else />
    </el-icon>
    <div class="content">
      <dy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue"
import UserInfo from "./user-info.vue"
import DyBreadcrumb from "@/base-ui/breadcrumb"
import { pathMapBreadcrumbs } from "@/utils/map-menus"
import { useStore } from "@/store"
import { useRoute } from "vue-router"

const emit = defineEmits(["foldChange"])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}

// 面包屑数据
const store = useStore()

const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
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
