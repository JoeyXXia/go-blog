import { BASE_URL, TIME_OUT } from './config'
import XXRequest from './request'

const xxRequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {},
})

export default xxRequest
