import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface DYRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (error: any) => any
}

export interface DYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DYRequestInterceptors<T>
  showLoading?: boolean
}
