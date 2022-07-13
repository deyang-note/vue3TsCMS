import { IForm } from "@/base-ui/form"

export const formConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "20px 40px"
  },
  formItems: [
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
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  colLayout: {
    span: 8
  }
}
