import Style from "./CurrencyButton.module.css";
import { CurrencyType } from "../../../../../constants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/hooks/hooks";
import { setCurrency } from "../../../../../store/reducers/currencyReducer";

interface CurrencyButtonProps {
  currency: CurrencyType;
  position?: "first" | "last";
}

function CurrencyButton({ currency, position }: CurrencyButtonProps) {
  const currentCurrency = useAppSelector(
    (state) => state.currencyReducer.value
  );
  const dispatch = useAppDispatch();
  const changeCurrency = () => dispatch(setCurrency(currency));
  let classButton =
    Style.currency_button +
    (currentCurrency === currency ? ` ${Style.active}` : "");
  if (position) {
    classButton += ` ${Style[position]}`;
  }
  return (
    <button className={classButton} onClick={changeCurrency}>
      {currency}
    </button>
  );
}

export { CurrencyButton };
