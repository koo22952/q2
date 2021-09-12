import { request } from './baseUrl'

// 登入
export const login = async (params) => request.post('/login', params)
// 註冊
export const register = async (params) => request.post('/register', params)
// 取得使用者
export const user = async (params) => request.get('/users', params)
// 上傳使用者圖片
export const uploadPicture = async (params) =>
  request.post('/users/uploadPicture', params)
// 上傳使用者圖片(Base64)
export const uploadBase64Picture = async (params) =>
  request.post('/users/uploadBase64Picture', params)
// 修改使用者名稱
export const updateName = async (params) =>
  request.put('/users/updateName', params)
// 取得使用者(單筆)
export const oneUser = async (username) => request.get(`/api/users/${username}`)
