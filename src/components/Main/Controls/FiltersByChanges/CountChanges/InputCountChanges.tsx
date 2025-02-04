import Styles from "./inputCountChanges.module.css";
import {
  CountChanges,
  setFilter,
  setOnlyOneFilter,
  useAppDispatch,
} from "../../../../../store";
import { useAppSelector } from "../../../../../store";

interface InputCountChangesProps {
  counts: CountChanges;
  labelText: string;
}

function InputCountChanges({ counts, labelText }: InputCountChangesProps) {
  const countsFilter = useAppSelector((state) => state.filterReducer);
  const dispatch = useAppDispatch();
  const changeFilter = () => dispatch(setFilter(counts));
  const setOneFilter = () => dispatch(setOnlyOneFilter(counts));
  return (
    <li className={Styles.inputCountChanges}>
      <label>
        <input
          type="checkbox"
          checked={countsFilter[counts]}
          onChange={changeFilter}
        />
        {labelText}
        <button className={Styles.button} onClick={setOneFilter}>
          ТОЛЬКО
        </button>
      </label>
    </li>
  );
}

export { InputCountChanges };
