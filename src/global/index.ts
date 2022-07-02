import { App } from "vue"
import registerElement from "@/global/register-element"

export default function registerApp(app: App) {
  registerElement(app)
}
