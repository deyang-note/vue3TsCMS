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
  ElLink
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
  ElLink
]
export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
//# sourceMappingURL=register-element.js.map
