import { createSlice } from "@reduxjs/toolkit";
import { postApis } from "./post.service";

const initialState = {
  posts: [],
  activeLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.posts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(
      postApis.endpoints.getPosts.matchPending, (state) => {
        state.posts = [];
        state.activeLoading = true;
      }
    )
    .addMatcher(
        postApis.endpoints.getPosts.matchFulfilled,
        (state, { payload }) => {
          state.posts = payload;
          state.activeLoading = false;
        }
    )
    ;
  },
});

// Action creators are generated for each case reducer function

const { reducer } = postSlice;

export default reducer;

export const {setPosts} = postSlice.actions;
