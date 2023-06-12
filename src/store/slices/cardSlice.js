import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8001/api' }),
  endpoints: (builder) => ({
    getCards: builder.query({
        query: () => ({
            url: '/cards/',
            method: 'Get',
            headers: {
                accept: 'application/json'
            }
        }),
    })
})
})

export const {useGetCardsQuery} = cardApi