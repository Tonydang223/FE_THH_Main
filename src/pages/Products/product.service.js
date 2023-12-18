// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../api/fetchBaseQuery";

// Define a service using a base URL and expected endpoints
export const productApis = createApi({
  reducerPath: "productsApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "Comment"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => {
        return {
          url: "products/all",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
    }),
    getOneProduct: builder.query({
      query: (query) => {
        return {
          url: `products/${query}`,
          credentials: "include",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
    }),
    addComment: builder.mutation({
      query: (body) => {
        return {
          url: "comment/add",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Comment"],
    }),
    getAllComments: builder.query({
      query: (type) => {
        return {
          url: `comment/parts/${type}`,
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: ["Comment"],
    }),
    editComment: builder.mutation({
      query: (data) => {
        return {
          url: `comment/${data.id}`,
          method: 'POST',
          body: data.body
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      invalidatesTags: ["Comment"],
    }),
    delComment: builder.mutation({
      query: (id) => {
        return {
          url: `comment/del/${id}`,
          method: 'POST',
        };
      },
      invalidatesTags: ["Comment"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductQuery,
  useAddCommentMutation,
  useGetAllCommentsQuery,
  useEditCommentMutation,
  useDelCommentMutation,
  useGetOneProductQuery,
} = productApis;
