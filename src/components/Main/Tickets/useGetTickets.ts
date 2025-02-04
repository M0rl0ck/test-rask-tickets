import { useEffect, useState } from "react";
import { useAppSelector, useGetTicketsQuery } from "../../../store";
import type { Ticket } from "../../../types";

function useGetTickets() {
  const { data, isLoading, isError } = useGetTicketsQuery();
  const filter = useAppSelector((state) => state.filterReducer);
  const [filteredData, setFilteredData] = useState<Ticket[]>([]);
  useEffect(() => {
    if (data) {
      const newData = data.tickets.filter((ticket) => {
        return (
          (filter["0"] && ticket.stops === 0) ||
          (filter["1"] && ticket.stops === 1) ||
          (filter["2"] && ticket.stops === 2) ||
          (filter["3"] && ticket.stops === 3)
        );
      });
      setFilteredData(newData);
    }
  }, [data, filter]);
  return { filteredData, isLoading, isError };
}

export { useGetTickets };
