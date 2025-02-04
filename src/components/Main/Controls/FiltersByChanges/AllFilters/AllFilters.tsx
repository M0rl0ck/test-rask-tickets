import {
  setAllFilter,
  useAppDispatch,
  useAppSelector,
} from "../../../../../store";
import Styles from "./allFilters.module.css";

function AllFilters() {
  const countsFilter = useAppSelector((state) => state.filterReducer);
  const isAllFilter = Object.values(countsFilter).every((value) => value);
  const dispatch = useAppDispatch();
  const changeFilter = () => dispatch(setAllFilter());
  return (
    <li className={Styles.inputCountChanges}>
      <label>
        <input type="checkbox" checked={isAllFilter} onChange={changeFilter} />
        Все
      </label>
    </li>
  );
}

export { AllFilters };
