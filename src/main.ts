import { createApp } from "vue"
import registerApp from "@/global"

// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

registerApp(app)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount("#app")
