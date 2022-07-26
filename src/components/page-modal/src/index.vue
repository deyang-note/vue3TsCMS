<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <dy-form :="modalConfig" v-model="formData"></dy-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue"
import { useStore } from "vuex"
import DyForm from "@/base-ui/form"

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
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

// 点击确定按钮的逻辑
const store = useStore()
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch("system/editPageDataAction", {
      pageName: props.pageName,
      newData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    // 新建
    store.dispatch("system/createPageDataAction", {
      pageName: props.pageName,
      editData: { ...formData.value }
    })
  }
}
</script>
