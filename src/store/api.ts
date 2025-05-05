import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    tagTypes: [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: (builder) => ({
    })
})

export const {} = api