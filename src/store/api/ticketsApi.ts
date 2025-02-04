import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TicketType } from "../../types";

interface TicketsResponse {
  tickets: TicketType[];
}

const ticketsApi = createApi({
  reducerPath: "ticketsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "./data.json" }),
  endpoints: (builder) => ({
    getTickets: builder.query<TicketsResponse, void>({
      query: () => "",
    }),
  }),
});

const { useGetTicketsQuery } = ticketsApi;

export { ticketsApi, useGetTicketsQuery };
