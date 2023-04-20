import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { logout } from '../reducers/userSlice';

const BASE_URL = process.env.REACT_APP_API_URL as string;
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`,
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (arg, api, extraOptions) => {

  await mutex.waitForUnlock();
  let result = await baseQuery(arg, api, extraOptions);

  if ((result.error?.data as any)?.message === 'You are not logged in') {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'auth/refresh' },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          result = await baseQuery(arg, api, extraOptions);
        } else {
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    }
    else {
      await mutex.waitForUnlock();
      result = await baseQuery(arg, api, extraOptions);
    }
  }

  return result;
}

export default customFetchBase;