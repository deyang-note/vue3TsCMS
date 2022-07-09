export const rules = {
  name: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名为长度5～10个字母或者数字",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码是3个以上字母或者数字",
      trigger: "blur"
    }
  ]
}
//# sourceMappingURL=login-account.js.map
