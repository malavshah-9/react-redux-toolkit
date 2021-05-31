import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counter-slice";

const rootStore = configureStore({
  reducer: {
    counterSlice,
  },
  devTools: true,
});

export default rootStore;

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;
