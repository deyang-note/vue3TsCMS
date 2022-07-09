import { App } from "vue"
import "element-plus/theme-chalk/base.css"
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader
} from "element-plus"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElMain,
  ElHeader
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
