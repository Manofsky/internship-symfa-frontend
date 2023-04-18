import { configureStore } from '@reduxjs/toolkit'
import switchTheme from './reducers/switchTheme'
import { goodsApi } from './reducers/goodsApi';
import { authApi } from './reducers/authApi';

export const store = configureStore({
  reducer: {
    switchTheme,
    [authApi.reducerPath]: authApi.reducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, goodsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;