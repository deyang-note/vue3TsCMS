<template>
  <div class="page-search">
    <dy-form :="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" :icon="Refresh" @click="handleResetClick">
            重制
          </el-button>
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
// 双向绑定的属性应该是由配置文件的 field 来决定的
// 1.优化一：formData中的属性应该动态来决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = []
for (const item of formItems) {
  formOriginData[item.field] = ""
}
const formData = ref(formOriginData)
// 2.优化二用户点击重置
const handleResetClick = () => {
  // 方法一：内部通过watch监听formData抛出方法进行重置，
  // for (const key in formOriginData) {
  //   formData.value[key] = formOriginData[key]
  // }
  // 方法二：
  formData.value = formOriginData
}
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
