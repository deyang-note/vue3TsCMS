// service统一出口
import DYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import { AxiosRequestHeaders } from "axios"

const dyRequest = new DYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = "hhh"
      if (token) {
        ;(
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`
      }
      console.log("请求成功的拦截：", config)
      return config
    },
    requestInterceptorsCatch: (err) => {
      console.log("请求失败的拦截：", err)
      return err
    },
    responseInterceptors: (res) => {
      console.log("响应成功的拦截：", res)
      return res
    },
    responseInterceptorsCatch: (err) => {
      console.log("响应失败的拦截：", err)
      return err
    }
  }
})

export default dyRequest
