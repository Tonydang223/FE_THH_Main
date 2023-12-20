import { createSlice } from "@reduxjs/toolkit";
import { courseApis } from "./course.service"

const initialState = {
  courses: [],
  activeLoading: false,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(
      courseApis.endpoints.getCourses.matchPending, (state) => {
        state.courses = [];
        state.activeLoading = true;
      }
    )
    .addMatcher(
        courseApis.endpoints.getCourses.matchFulfilled,
        (state, { payload }) => {
          state.courses = payload;
          state.activeLoading = false;
        }
    )
    ;
  },
});

// Action creators are generated for each case reducer function

const { reducer } = courseSlice;

export default reducer;

// export const {} = courseSlice.actions;
