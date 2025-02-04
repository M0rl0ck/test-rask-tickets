import { configureStore } from "@reduxjs/toolkit";
import { currencyReducer, filterReducer } from "./reducers";
import { ticketsApi } from "./api";
import { exchangeRateApi } from "./api";

const store = configureStore({
  reducer: {
    [ticketsApi.reducerPath]: ticketsApi.reducer,
    [exchangeRateApi.reducerPath]: exchangeRateApi.reducer,
    currencyReducer,
    filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ticketsApi.middleware,
      exchangeRateApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export { store };
