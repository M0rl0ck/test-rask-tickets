const CURRENCY = {
  USD: "USD",
  EUR: "EUR",
  RUB: "RUB",
} as const;

type CurrencyType = (typeof CURRENCY)[keyof typeof CURRENCY];

export { CURRENCY };
export type { CurrencyType };
