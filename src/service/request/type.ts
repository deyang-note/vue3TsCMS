import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface DYRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (error: any) => any
}

export interface DYRequestConfig extends AxiosRequestConfig {
  interceptors?: DYRequestInterceptors
}
