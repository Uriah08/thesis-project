import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    tagTypes: [],
    endpoints: (builder) => ({
        createAgent: builder.mutation({
            query: (data) => ({
                url: "/agent",
                method: "POST",
                body: data,
            }),
        }),
        // getAgents: builder.query({
        //     query: () => ({
        //         url: "/agents",
        //         method: "GET",
        //     }),
        // }),
    })
})

export const {
    useCreateAgentMutation,
} = api