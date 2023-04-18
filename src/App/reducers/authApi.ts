import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
    credentials: 'include',
  }),
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
  })
});

export const { useLoginMutation } = authApi;