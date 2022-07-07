<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>账号登陆
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link class="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Iphone, User } from "@element-plus/icons-vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"

// 1.定义属性
const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref<string>("account")

// 2.定义方法
const handleLoginClick = () => {
  if (currentTab.value === "account") {
    accountRef.value.loginAction(isKeepPassword.value)
  } else {
    console.log("调用phoneRef中的loginAction方法")
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
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
