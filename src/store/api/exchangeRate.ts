import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ExchangeRate } from "../../types";

const exchangeRateApi = createApi({
  reducerPath: "exchangeRateApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cbr-xml-daily.ru/latest.js",
  }),
  endpoints: (builder) => ({
    getExchangeRate: builder.query<ExchangeRate, void>({
      query: () => "",
    }),
  }),
});

const { useLazyGetExchangeRateQuery } = exchangeRateApi;

export { exchangeRateApi, useLazyGetExchangeRateQuery };
