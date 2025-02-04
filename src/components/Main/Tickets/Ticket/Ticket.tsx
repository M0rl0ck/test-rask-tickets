import Styles from "./ticket.module.css";
import type { TicketType } from "../../../../types";
import { ButtonContainer } from "./ButtonContainer";
import { Description } from "./Description";

interface TicketProps {
  ticket: TicketType;
}

function Ticket({ ticket }: TicketProps) {
  return (
    <div className={Styles.ticket}>
      <ButtonContainer logoName={ticket.carrier} price={ticket.price} />
      <Description ticket={ticket} />
    </div>
  );
}

export { Ticket };
