/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { XXRequestConfig } from './type'

class XXRequest {
  instance: AxiosInstance

  constructor(config: XXRequestConfig) {
    this.instance = axios.create(config)

    //interceptors for every instance
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      },
    )

    //for specific xxRequest inceptors
    // this.instance.interceptors.request.use(
    //   config.interceptors?.requestSuccessFn,
    //   config.interceptors?.requestFailureFn
    // )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn,
    )
  }

  //request method
  request<T = any>(config: XXRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: XXRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: XXRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: XXRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: XXRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default XXRequest
