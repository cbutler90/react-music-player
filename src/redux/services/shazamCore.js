import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '3c3b5c55c3msh3caa104470e91eap137a35jsn41532e805d08')

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' })
  })
});

export const {
  useGetTopChartsQuery
} = shazamCoreApi;