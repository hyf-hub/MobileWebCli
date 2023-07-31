import type { AxiosRequestConfig, AxiosRespons, InternalAxiosRequestConfig } from 'axios'
export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
  isFormData?: boolean
  isToken?: boolean
}
