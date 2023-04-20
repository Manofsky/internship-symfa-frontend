import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../reducers/userSlice';
import { IUser } from '../../models/interfaces';

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users`,
    credentials: 'include',
  }),
  endpoints: (build) => ({
    getUserByEmail: build.query<IUser, string | undefined>({
      query: (email) => `${email}`,
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