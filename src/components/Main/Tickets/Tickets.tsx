import Style from "./Tickets.module.css";
import { useGetTickets } from "./useGetTickets";
import { Ticket } from "./Ticket/Ticket";

function Tickets() {
  const { filteredData, isLoading } = useGetTickets();
  return (
    <div className={Style.tickets}>
      {isLoading && <div>Loading...</div>}
      {filteredData.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export { Tickets };
