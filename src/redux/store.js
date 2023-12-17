import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "../pages/Auth/authSlice";
import { ApisAuth } from "../pages/Auth/auth.service";
import { profileApi } from "../pages/Profile/profile.service";
import { productApis } from "../pages/Products/product.service";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [ApisAuth.reducerPath]: ApisAuth.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApis.reducerPath]: productApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      ApisAuth.middleware,
      profileApi.middleware,
      productApis.middleware,
    ]),
});

setupListeners(store.dispatch);
