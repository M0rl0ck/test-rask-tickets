import Style from "./description.module.css";

interface TicketDateProps {
  time: string;
  date: string;
  name: string;
  code: string;
}

function TicketDate({ time, date, name, code }: TicketDateProps) {
  const ticketDate = new Date(date);
  const dateStr =
    ticketDate.toLocaleString("ru-RU", {
      day: "numeric",
      month: "short",
    }) +
    " " +
    ticketDate.toLocaleString("ru-RU", {
      year: "numeric",
      weekday: "short",
    });
  return (
    <div className={Style.date}>
      <p>{time}</p>
      <p>
        {code}, {name}
      </p>
      <p> {dateStr}</p>
    </div>
  );
}

export { TicketDate };
