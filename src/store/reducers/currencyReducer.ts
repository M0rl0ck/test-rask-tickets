import { CURRENCY } from "../../constants";
import type { CurrencyType } from "../../constants";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CurrencyState {
  value: CurrencyType;
}

const initialState: CurrencyState = {
  value: CURRENCY.RUB,
};

const currencySlice = createSlice({
  name: "currencyReducer",
  initialState: initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<CurrencyType>) => {
      state.value = action.payload;
    },
  },
});

const currencyReducer = currencySlice.reducer;
const { setCurrency } = currencySlice.actions;

export { currencyReducer, setCurrency };
