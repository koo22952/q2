import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://l8-upgrade-apis.vercel.app/api',
  timeout: 5000,
})

// 添加請求攔截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken')

    if (token !== null) {
      config.headers['Content-Type'] = 'application/json'
      config.headers['token'] = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 相對應錯誤處理
    switch (error.response?.status) {
      case 401:
      case 403:
      case 500:
      default:
        console.log('就是發生了錯誤！')
    }
    return Promise.reject(error.response)
  }
)
