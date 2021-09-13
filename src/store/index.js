import { configureStore } from '@reduxjs/toolkit'
import accountReducer from '@/store/features/account'

export default configureStore({
  reducer: {
    account: accountReducer,
  },
})
