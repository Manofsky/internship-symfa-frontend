import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../reducers/userSlice';
import { IUser } from '../../models/interfaces';
import customFetchBase from './customFetchBase';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getMe: build.query<IUser, null>({
      query: () => {
        return {
          url: 'users/me',
          credentials: 'include',
        };
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

export const { useGetMeQuery } = userApi;