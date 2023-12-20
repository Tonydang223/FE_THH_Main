import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../pages/Auth/authSlice";
import postReducer from "../pages/Blogs/postSlice";
import courseReducer from "../pages/Courses/courseSlice";
import { ApisAuth } from "../pages/Auth/auth.service";
import { profileApi } from "../pages/Profile/profile.service";
import { productApis } from "../pages/Products/product.service";
import { postApis } from "../pages/Blogs/post.service"
import { courseApis } from "../pages/Courses/course.service"

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    courses: courseReducer,
    [ApisAuth.reducerPath]: ApisAuth.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApis.reducerPath]: productApis.reducer,
    [postApis.reducerPath]: postApis.reducer,
    [courseApis.reducerPath]: courseApis.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      ApisAuth.middleware,
      profileApi.middleware,
      productApis.middleware,
      postApis.middleware,
      courseApis.middleware,
    ]),
});

setupListeners(store.dispatch);
