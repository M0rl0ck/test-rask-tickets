import { TicketType } from "../../../../../types";
import { Divider } from "./Devider";
import { TicketDate } from "./TicketDate";
import Styles from "./description.module.css";

interface DescriptionProps {
  ticket: TicketType;
}

function Description({ ticket }: DescriptionProps) {
  return (
    <div className={Styles.container}>
      <TicketDate
        time={ticket.departure_time}
        date={ticket.departure_date}
        name={ticket.origin_name}
        code={ticket.origin}
      />
      <Divider stops={ticket.stops} />
      <TicketDate
        time={ticket.arrival_time}
        date={ticket.arrival_date}
        name={ticket.destination_name}
        code={ticket.destination}
      />
    </div>
  );
}

export { Description };
