<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>账号登陆
          </span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <h2>手机登录</h2>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { Iphone, User } from "@element-plus/icons-vue"
import LoginAccount from "./login-account.vue"
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
.demo-tabs .custom-tabs-label {
  display: flex;
  align-items: center;
  .el-icon {
    margin-right: 4px;
  }
}
</style>
