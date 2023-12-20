// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { setToken } from "./authSlice";
import baseQueryWithReauth from "../../api/fetchBaseQuery";

// Define a service using a base URL and expected endpoints
export const ApisAuth = createApi({
  reducerPath: "apisAuth",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "auth/login",
          method: "POST",
          body,
        };
      },
    }),
    logUp: builder.mutation({
      query: (body) => {
        return {
          url: "auth/signUp",
          method: "POST",
          body,
        };
      },
    }),
    forgotPass: builder.mutation({
      query: (body) => {
        return {
          url: "auth/forgotPass",
          method: "POST",
          body,
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        return {
          url: "auth/logout",
          method: "POST",
        };
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh_token",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { access_token } = data;
          dispatch(setToken({ access_token }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useLogUpMutation,
  useForgotPassMutation,
} = ApisAuth;
