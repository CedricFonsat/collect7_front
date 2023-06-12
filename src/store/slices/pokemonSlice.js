// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8001/api' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
        query: () => ({
            url: '/collection_cards/',
            method: 'Get',
            headers: {
                accept: 'application/json'
            }
        }),
    })
})
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
//export const { useGetPokemonByNameQuery } = pokemonApi
export const {useGetUsersQuery,useCreateUserMutation} = pokemonApi