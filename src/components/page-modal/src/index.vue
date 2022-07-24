<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center>
      <dy-form :="modalConfig" v-model="formData"></dy-form>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import DyForm from "@/base-ui/form"

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  }
})

const dialogVisible = ref(true)
const formData = ref({})
</script>
