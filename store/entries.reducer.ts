import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import entriesData from "../data/dummy/entries.data";
import { IEntry, IEntryCreate } from "../data/interfaces/entry.interface";
import { RootState } from ".";

interface entriesState {
  all: IEntry[];
  activeId: number | null;
}

const initialState: entriesState = {
  all: entriesData,
  activeId: null,
};

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<IEntryCreate>) => {
      // TODO: Replace this with api call that returns IEntry object
      const entry = {
        id: Math.random() * 100,
        fields: [],
        relationships: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        ...action.payload,
      };

      state.all.push(entry);
    },
    updateEntry: (state, action: PayloadAction<IEntry>) => {
      state.all.map((entry) => {
        if (entry.id === action.payload.id) {
          return action.payload;
        }
        return entry;
      });
    },
    removeEntry: (state, action: PayloadAction<number>) => {
      const index = state.all.findIndex((entry) => entry.id === action.payload);
      state.all.splice(index, 1);
    },
    setActiveEntryId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
    unsetActiveEntryId: (state) => {
      state.activeId = null;
    },
  },
});

export const {
  addEntry,
  updateEntry,
  removeEntry,
  setActiveEntryId,
  unsetActiveEntryId,
} = entriesSlice.actions;

export const selectActiveEntry = createSelector(
  (state: RootState) => state.entries,
  (entries) => {
    if (entries.activeId) {
      return entries.all.filter(
        (entry: IEntry) => entry.id === entries.activeId
      )[0];
    }

    return null;
  }
);

export default entriesSlice.reducer;
