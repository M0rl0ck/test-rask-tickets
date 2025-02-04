import { AllFilters } from "./AllFilters/AllFilters";
import { InputCountChanges } from "./CountChanges";
import Style from "./FiltersByChanges.module.css";

function FiltersByChanges() {
  return (
    <ul className={Style.filtersContainer}>
      <AllFilters />
      <InputCountChanges counts={"0"} labelText="Без пересадок" />
      <InputCountChanges counts={"1"} labelText="1 пересадка" />
      <InputCountChanges counts={"2"} labelText="2 пересадки" />
      <InputCountChanges counts={"3"} labelText="3 пересадки" />
    </ul>
  );
}

export { FiltersByChanges };
