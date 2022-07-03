import { createApp } from "vue"
import globalRegisterApp from "@/global"

import "normalize.css"
import "./assets/css/index.less"
// import "@/service/axios_demo"
import dyRequest from "@/service/index"

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

// dyRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptors: (config) => {
//       console.log("单独请求的config")
//       return config
//     },
//     responseInterceptors: (res) => {
//       console.log("单独响应的res")
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

dyRequest
  .get<DataType>({
    url: "/home/multidata",
    method: "GET",
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
