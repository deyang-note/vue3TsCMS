// service统一出口
import DYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import { AxiosRequestHeaders } from "axios"
import localCache from "@/utils/cache"

const dyRequest = new DYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      // 携带 token 的拦截
      const token = localCache.getCache("token")
      if (token) {
        ;(
          config.headers as AxiosRequestHeaders
        ).Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default dyRequest
