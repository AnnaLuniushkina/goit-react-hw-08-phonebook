import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://630cbf3883986f74a7c96b1b.mockapi.io' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        getContactsBiId: builder.query({
            query: id => `/contacts/${id}`,
        }),
        fetchContacts: builder.query({
            query: () => '/contacts',
            method: 'GET',
            providesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        createContact: builder.mutation({
            query: ({name, phone}) => ({
                url: '/contacts',
                method: 'POST',
                body: {name, phone},
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const { useGetContactsBiIdQuery, useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation } = contactsApi;