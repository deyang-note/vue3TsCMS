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
import localCache from "@/utils/cache"
import { rules } from "../config/login-account"
import { ElForm } from "element-plus"

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPwd: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPwd) {
        // 嫩滴缓存
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("name")
        localCache.deleteCache("password")
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
