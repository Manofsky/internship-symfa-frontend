import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../reducers/userSlice';
import { IUser } from '../../models/interfaces';
import customFetchBase from './customFetchBase';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getUserByEmail: build.query<IUser, string | undefined>({
      query: (email) => {
        return {
          url: `users/${email}`,
          credentials: 'include',
        };
      },
      transformErrorResponse: (response: any) => {
        return response.data.message;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) { }
      },
    }),
  }),
});

export const { useGetUserByEmailQuery } = userApi;