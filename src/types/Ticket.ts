type LogoName = "SU" | "TK" | "S7" | "BA";

type TicketType = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: LogoName;
  stops: number;
  price: number;
  id: string;
};

export type { TicketType, LogoName };
