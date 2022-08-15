import { configureStore } from "@reduxjs/toolkit";

import { requestTMDbAPI } from "../services/requestTMDbAPI";

export const store = configureStore({
  reducer: {
    [requestTMDbAPI.reducerPath]: requestTMDbAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(requestTMDbAPI.middleware);
  },
});
