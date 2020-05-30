import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import apiActionMiddleware from './apiActionMiddleware'

import appReducer, { App } from '../app/appSlice'

export interface StoreState {
  app: App
}

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    apiActionMiddleware,
  ],
})

export default store
