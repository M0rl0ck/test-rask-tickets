import { useAppSelector } from "../../../../../store";
import { useLazyGetExchangeRateQuery } from "../../../../../store/api";
import Styles from "./buttonContainer.module.css";

const CURRENCY_SYMBOL = {
  RUB: "₽",
  USD: "$",
  EUR: "€",
};

interface ButtonBuyProps {
  price: number;
}
function ButtonBuy({ price }: ButtonBuyProps) {
  const currency = useAppSelector((state) => state.currencyReducer);
  const [getExchangeRate, { data, isLoading }] = useLazyGetExchangeRateQuery();
  if (currency.value !== "RUB" && !isLoading && !data) {
    getExchangeRate();
  }
  return (
    <button className={Styles.buttonBuy}>
      <span>Купить</span>
      <span>
        за{" "}
        {currency.value === "RUB"
          ? price + "₽"
          : isLoading || !data
          ? "Loading..."
          : (data.rates[currency.value] * price).toFixed(2) +
            CURRENCY_SYMBOL[currency.value]}
      </span>
    </button>
  );
}

export { ButtonBuy };
