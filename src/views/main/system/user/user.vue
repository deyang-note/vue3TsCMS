<template>
  <div class="user">
    <div class="search">
      <dy-form :form-items="formItem" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import DyForm, { IFormItem } from "@/base-ui/form"

const formItem: IFormItem[] = [
  {
    type: "input",
    label: "用户名",
    placeholder: "请输入用户名"
  },
  {
    type: "password",
    label: "密码",
    placeholder: "请输入密码"
  },
  {
    type: "select",
    label: "喜欢的运动",
    placeholder: "请选择喜欢的运动",
    options: [
      {
        title: "篮球",
        value: "basketball"
      },
      {
        title: "足球",
        value: "football"
      }
    ]
  },
  {
    type: "datepicker",
    label: "创建时间",
    placeholder: "请输入创建时间"
  }
]
</script>

<style scoped></style>
