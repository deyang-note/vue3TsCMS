<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from "vue"
import { rules } from "../config/login-account"
import { ElForm } from "element-plus"

const account = reactive({
  name: "",
  password: ""
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log("真正的执行登陆逻辑")
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
