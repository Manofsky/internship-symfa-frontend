import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TLogin } from '../../models/interfaces';
import { userApi } from './userApi';

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/auth`,
    credentials: 'include',
  }),
  endpoints: build => ({
    login: build.mutation<any, TLogin>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: { message: string }) => response.message,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data === 'ok') {
            dispatch(userApi.endpoints.getUserByEmail.initiate(args.email));
          }
        } catch (error) { }
      },
    }),
    refresh: build.query<any, void>({
      query: () => 'refresh',
    }),
  })
});

export const { useLoginMutation, useRefreshQuery } = authApi;