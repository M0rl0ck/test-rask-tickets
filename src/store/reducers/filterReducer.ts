import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CountChanges = "0" | "1" | "2" | "3";
type FilterState = Record<CountChanges, boolean>;

const initialState: FilterState = {
  "0": true,
  "1": true,
  "2": true,
  "3": true,
} as const;

const filterSlice = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<CountChanges>) {
      const newState = { ...state };
      newState[action.payload] = !newState[action.payload];
      return newState;
    },
    setAllFilter() {
      return initialState;
    },
    setOnlyOneFilter(state, action: PayloadAction<CountChanges>) {
      const newState = { ...state };
      const keys = Object.keys(newState) as CountChanges[];
      keys.forEach((key) => {
        newState[key] = key === action.payload;
      });
      return newState;
    },
  },
});
const { setFilter, setAllFilter, setOnlyOneFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

export { filterReducer, setFilter, setAllFilter, setOnlyOneFilter };
export type { CountChanges };
