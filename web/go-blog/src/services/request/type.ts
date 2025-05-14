import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface XXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: AxiosError) => Promise<never>
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: AxiosError) => Promise<never>
}

export interface XXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XXInterceptors<T>
}
