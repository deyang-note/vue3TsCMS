import { createApp } from "vue"
import globalRegisterApp from "@/global"

import "@/service/axios_demo"

// 全局引入
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

const app = createApp(App)

// globalRegisterApp(app)
app.use(globalRegisterApp)
app.use(store)
app.use(router)
// app.use(ElementPlus)
app.mount("#app")

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
