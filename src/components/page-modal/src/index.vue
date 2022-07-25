<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <dy-form :="modalConfig" v-model="formData"></dy-form>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"
import DyForm from "@/base-ui/form"

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  }
})

const dialogVisible = ref(false)
const formData = ref<any>({})
defineExpose({
  dialogVisible
})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
</script>
