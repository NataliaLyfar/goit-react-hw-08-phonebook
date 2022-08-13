import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from 'constants';


export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `${BASE_URL}`, 
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if(token){
        headers.set('authorization', `Bearer ${token}`);
      };
      return headers;
    },
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
        providesTags: ['contact'],
    }),
    createContacts: builder.mutation({
        query: ({ name, number }) => ({
            url: '/contacts',
            method: 'POST',
            body: { name, number },
        }),
        invalidatesTags: ['contact'],
    }),
    deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['contact'],
    }),
    updateContact: builder.mutation({
      query: ({ id, name, number}) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const { 
    useGetContactsQuery,
    useCreateContactsMutation,
    useDeleteContactMutation,
    useUpdateContactMutation, 
} = contactsApi;