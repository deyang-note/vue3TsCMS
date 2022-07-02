import axios from "axios"
import { AxiosInstance } from "axios"
import { DYRequestInterceptors, DYRequestConfig } from "./type"

class DYRequest {
  instance: AxiosInstance
  interceptors?: DYRequestInterceptors
  constructor(config: DYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从 config 中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器：请求成功的拦截：")
        return config
      },
      (err) => {
        console.log("所有的实例都有的拦截器：请求失败的拦截：")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器：响应成功的拦截：")

        const data = res.data
        if (data.returnCode === "-1001") {
          console.log("请求失败~，错误信息")
        } else return res.data
      },
      (err) => {
        console.log("所有的实例都有的拦截器：响应失败的拦截：")
        // 例子：判断不同的 HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误～")
        }
        return err
      }
    )
  }

  request(config: DYRequestConfig) {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptors) {
        res = config.interceptors.responseInterceptors(res)
      }
      console.log(res)
    })
  }
}

export default DYRequest
