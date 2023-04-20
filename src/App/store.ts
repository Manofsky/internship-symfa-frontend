import { configureStore } from '@reduxjs/toolkit';
import switchTheme from './reducers/switchTheme';
import userSlice from './reducers/userSlice';
import { goodsApi } from './api/goodsApi';
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';

export const store = configureStore({
  reducer: {
    switchTheme,
    userSlice,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, authApi.middleware, goodsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;