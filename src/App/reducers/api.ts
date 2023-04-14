import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../models/interfaces'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL
  }),
  endpoints: build => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => 'goods'
    }),
    getSmallImage: build.query<string, string>({
      query: (image) => ({
        url: `goods/small/${image}`,
        responseHandler: async (response) => response.url,
      }),
    })
  })
});

export const { useGetAllProductsQuery, useGetSmallImageQuery } = api;
