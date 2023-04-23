import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TLogin, TSignup } from '../../models/interfaces';
import { userApi } from './userApi';

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  endpoints: build => ({
    login: build.mutation<any, TLogin>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: { message: string }) => response.message,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data === 'ok') {
            dispatch(userApi.endpoints.getMe.initiate(null));
          }
        } catch (error) { }
      },
    }),
    signup: build.mutation<any, TSignup>({
      query: (data) => ({
        url: 'users/register',
        method: 'POST',
        body: data,
      }),
    }),
  })
});

export const { useLoginMutation, useSignupMutation } = authApi;