import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/interfaces'

const BASE_URL = process.env.REACT_APP_API_URL as string;

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/goods`
  }),
  endpoints: build => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => '',
    }),
    getSmallImage: build.query<string, string>({
      query: (image) => ({
        url: `small/${image}`,
        responseHandler: async (response) => response.url,
      }),
    })
  })
});

export const { useGetAllProductsQuery, useGetSmallImageQuery } = goodsApi;
