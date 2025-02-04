import { CurrencyButton } from "./CurrencyButton";
import Style from "./Currency.module.css";
import { CURRENCY } from "../../../../constants";

function CurrencyButtons() {
  return (
    <div className={Style.currency}>
      <CurrencyButton currency={CURRENCY.RUB} position="first" />
      <CurrencyButton currency={CURRENCY.USD} />
      <CurrencyButton currency={CURRENCY.EUR} position="last" />
    </div>
  );
}

export { CurrencyButtons };
