import { App } from "vue"
import registerElement from "@/global/register-element"

export default function globalRegisterApp(app: App) {
  registerElement(app)
}
