import { configureStore } from '@reduxjs/toolkit'
import switchTheme from './reducers/switchTheme'
import { api } from './reducers/api';

export const store = configureStore({
  reducer: {
    switchTheme,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;