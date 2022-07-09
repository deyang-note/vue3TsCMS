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

// globalRegisterApp(app)
app.use(globalRegisterApp)
app.use(store)
app.use(router)

setupStore()
// app.use(ElementPlus)
app.mount("#app")
