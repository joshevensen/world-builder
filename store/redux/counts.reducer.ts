import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import categories from "../../data/static/categories";

interface ICategoryCounts {
  [key: string]: number;
}

interface countsState {
  categories: ICategoryCounts;
  lists: number;
  templates: number;
}

let initialCategoryCounts: ICategoryCounts = {};

categories.forEach((category) => {
  initialCategoryCounts[category.name] = 0;
});

const initialState: countsState = {
  categories: initialCategoryCounts,
  lists: 0,
  templates: 0,
};

export const countsSlice = createSlice({
  name: "counts",
  initialState,
  reducers: {
    updateListsCount: (state, action: PayloadAction<number>) => {
      state.lists = action.payload;
    },
    updateTemplatesCount: (state, action: PayloadAction<number>) => {
      state.lists = action.payload;
    },
  },
});

export default countsSlice.reducer;
