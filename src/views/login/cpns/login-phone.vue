<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="phone">
      <el-form-item label="账号" prop="name">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <div class="get-code">
          <el-input type="password" v-model="phone.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { rules } from "../config/login-account"

const phone = reactive({
  number: "",
  code: ""
})
</script>

<style lang="less" scoped>
.login-phone {
  .get-code {
    display: flex;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
