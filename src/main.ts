import { createApp } from "vue"
// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import "element-plus/theme-chalk/base.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount("#app")
