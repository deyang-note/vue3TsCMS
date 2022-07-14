import { createApp } from "vue"
import globalRegisterApp from "@/global"

import "normalize.css"
import "./assets/css/index.less"
// import "@/service/axios_demo"
// import dyRequest from "@/service/index"

// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"
import store, { setupStore } from "./store"

const app = createApp(App)

import * as ElIconModules from "@element-plus/icons-vue"
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

// globalRegisterApp(app)
app.use(globalRegisterApp)
app.use(store)
setupStore()

app.use(router)

// app.use(ElementPlus)
app.mount("#app")
