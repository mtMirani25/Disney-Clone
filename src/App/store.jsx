import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;