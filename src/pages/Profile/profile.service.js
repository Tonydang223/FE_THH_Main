import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "../../api/fetchBaseQuery";
import { setUser } from "../Auth/authSlice";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => {
        return {
          url: "user/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["User"],
      transformResponse: (result) => {
        return result.data;
      },
    }),
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
    getUsers: builder.query({
      query: () => {
        return {
          url: "user/getAll",
          credentials: "include",
        };
      },
      transformResponse: (response) => {
        return response.data;
      },
      providesTags: (result) =>
      result
        ? [...result.map(({ _id }) => ({ type: "User", _id })), "User"]
        : ["User"],
    }),
    changePassByAdmin: builder.mutation({
      query: (body) => {
        return {
          url: `user/changePass/${body.id}`,
          method: "POST",
          body,
        }
      },
      transformResponse: (result) => {
        return result.data;
      }
    })
  }),
});

export const { useEditMeMutation, useGetMeQuery, useUpdatePassMutation, useGetUsersQuery, useCreateUserMutation, useChangePassByAdminMutation } = profileApi;
