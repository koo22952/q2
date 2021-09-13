import { createSlice } from '@reduxjs/toolkit'


export const accountInfo = createSlice({
  name: 'accountInfo',
  initialState: {
    _id: '',
    username: '',  // 帳號
    name: '',  // 姓名
    role: '',  // 權限規則
    link: '', //大頭貼
  },
  reducers: {
    del: (state, action) => {
      console.log(state, action, '222')
    },
    update: (state, action) => {
      let d = action.payload
      state = { ...state, ...d }

      return state
    },
  },
})


export const { del, update } = accountInfo.actions
export default accountInfo.reducer
