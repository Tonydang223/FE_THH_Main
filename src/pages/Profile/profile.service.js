import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../api/fetchBaseQuery";
import { setUser } from "../Auth/authSlice";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        return {
          url: "user/getInfo",
        };
      },
      transformResponse: (result) => {
        return result.data.user;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    editMe: builder.mutation({
      query: (body) => {
        return {
          url: "user/editProfile",
          method: "POST",
          body,
        };
      },
      transformResponse: (result) => {
        return result.data;
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    updatePass: builder.mutation({
      query: (body) => {
        return {
          url: "user/updatePass",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useEditMeMutation, useGetMeQuery, useUpdatePassMutation } = profileApi;
