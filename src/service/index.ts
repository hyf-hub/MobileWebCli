import $Request from './request'
import { BASE_URL, TIME_OUT } from './config'
// import { AxiosRequestConfig } from 'axios'
const Request = new $Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    responseInterceptorCatch: (error) => {
      console.log('requestResponseCatch', error)
    },
    responseInterceptor: (res) => {
      if (res.data?.code === 500) {

      }
      return res.data
    },
  },
})
export default Request
