import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants';


export const phonebookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BASE_URL}`, 
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if(token){
        headers.set('Authorization', `Bearer ${token}`);
      };
      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: data => ({
        url: '/users/login',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
        providesTags: ['contacts'],
    }),
    createContact: builder.mutation({
        query: ({ name, number }) => ({
            url: '/contacts',
            method: 'POST',
            body: { name, number },
        }),
        invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ id, name, number}) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetContactsQuery,
    useCreateContactMutation,
    useDeleteContactMutation,
    useUpdateContactMutation, 
} = phonebookApi;