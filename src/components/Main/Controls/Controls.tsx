import Style from "./Controls.module.css";
import { CurrencyButtons } from "./CurrencyButtons";
import { FiltersByChanges } from "./FiltersByChanges";

function Controls() {
  return (
    <div className={Style.controls}>
      <CurrencyButtons />
      <FiltersByChanges />
    </div>
  );
}

export { Controls };
