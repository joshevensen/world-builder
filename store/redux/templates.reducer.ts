import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
const _ = require("lodash");

import { RootState } from ".";
import templatesData from "../../data/dummy/templates.data";
import { ITemplate } from "../../data/interfaces/template.interface";

interface templatesState {
  all: ITemplate[];
  activeId: number | null;
}

const initialState: templatesState = {
  all: templatesData,
  activeId: null,
};

export const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<ITemplate>) => {
      state.all.push(action.payload);
    },
    updateTemplate: (state, action: PayloadAction<ITemplate>) => {
      state.all.map((template) => {
        if (template.id === action.payload.id) {
          return action.payload;
        }
        return template;
      });
    },
    removeTemplate: (state, action: PayloadAction<number>) => {
      const index = state.all.findIndex(
        (template) => template.id === action.payload
      );
      state.all.splice(index, 1);
    },
    setActiveTemplateId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
    unsetActiveTemplateId: (state) => {
      state.activeId = null;
    },
  },
});

export const {
  addTemplate,
  updateTemplate,
  removeTemplate,
  setActiveTemplateId,
  unsetActiveTemplateId,
} = templatesSlice.actions;

export const selectTemplatesByName = createSelector(
  (state: RootState) => state.templates,
  (templates) => _.orderBy(templates.all, ["name"], ["asc"])
);

export const selectActiveTemplate = createSelector(
  (state: RootState) => state.templates,
  (templates) => {
    if (templates.activeId) {
      return _.filter(templates.all, { id: templates.activeId })[0];
    }

    return null;
  }
);

export default templatesSlice.reducer;