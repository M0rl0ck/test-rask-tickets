import Styles from "./tickets.module.css";
import { useGetTickets } from "./useGetTickets";
import { Ticket } from "./Ticket/Ticket";
import { TransitionGroup } from "react-transition-group";
import { WrapperTransition } from "./WrapperTransition";

function Tickets() {
  const { filteredData, isLoading } = useGetTickets();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <TransitionGroup component="div" className={Styles.tickets}>
        {filteredData.map((ticket) => (
          <WrapperTransition key={ticket.id} id={ticket.id} Styles={Styles}>
            <Ticket ticket={ticket} />
          </WrapperTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

export { Tickets };
