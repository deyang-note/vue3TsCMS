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
