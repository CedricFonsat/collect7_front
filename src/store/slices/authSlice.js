import AsyncStorage from '@react-native-async-storage/async-storage'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://127.0.0.1:8001/api',
      prepareHeaders: async (headers) => {
        const user = await AsyncStorage.getItem("@token")
        if (user) {
          headers.set('authorization', `Bearer ${user}`)
        }
        headers.set('accept', 'application/json')
        return headers
    }
}),
//   prepareHeaders: (headers) => {
//    // console.log(token, '*********11******');
//     //const token = getState().authApi;
//     getToken = async () =>{
//         let token = await AsyncStorage.getItem('@token')
//         console.log(token)
//         return token
//     }

//    // console.log(token, '***************');
//     if (getToken) {
//       headers.set('Authorization', `Bearer ${getToken}`);
//     }
//     return headers;
//  },}),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
        query: (body) => ({
          url: '/login_check',
          method: 'POST',
          body,
        }),
      }),
      me: builder.query({
        query: () => ({
            url: '/me',
            method: 'Get',
        }),
    })
})
})

export const {useLoginUserMutation, useMeQuery} = authApi