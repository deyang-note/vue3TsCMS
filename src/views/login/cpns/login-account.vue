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
import LocalCache from "@/utils/cache"
import { rules } from "../config/login-account"
import { ElForm } from "element-plus"

const account = reactive({
  name: "",
  password: ""
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPwd: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log("真正的执行登陆逻辑")
      // 1.判断是否需要记住密码
      if (isKeepPwd) {
        // 嫩滴缓存
        localStorage.setItem("name", account.name)
        localStorage.setItem("password", account.password)
      }
      // 2.开始进行登陆验证
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
