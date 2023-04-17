import { configureStore } from '@reduxjs/toolkit'
import switchTheme from './reducers/switchTheme'
import { goodsApi } from './reducers/goodsApi';

export const store = configureStore({
  reducer: {
    switchTheme,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;