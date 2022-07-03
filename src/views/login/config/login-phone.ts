export const rules = {
  name: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur"
    },
    {
      pattern: /^[0-9]{11}$/,
      message: "请输入正确的手机号",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码是3个以上字母或者数字",
      trigger: "blur"
    }
  ]
}
