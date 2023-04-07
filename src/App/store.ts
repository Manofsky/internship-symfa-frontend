import { configureStore } from '@reduxjs/toolkit'
import switchTheme from './reducers/switchTheme'

export const store = configureStore({
  reducer: {
    switchTheme,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;