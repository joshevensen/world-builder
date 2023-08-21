import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";
import { IWorld } from "../../data/interfaces/world.interface";
import worldsData from "../../data/dummy/worlds.data";

interface worldsState {
  all: IWorld[];
  activeId: number | null;
}

const initialState: worldsState = {
  all: worldsData,
  activeId: null,
};

export const worldsSlice = createSlice({
  name: "worlds",
  initialState,
  reducers: {
    addWorld: (state: worldsState, action: PayloadAction<IWorld>) => {
      // TODO: Make this id correct
      const world = {
        id: Math.random() * 100,
        ...action.payload,
      };

      state.all.push(world);
    },
    updateWorld: (state: worldsState, action: PayloadAction<IWorld>) => {
      state.all.map((world) => {
        if (world.id === action.payload.id) {
          return action.payload;
        }
        return world;
      });
    },
    removeWorld: (state: worldsState, action: PayloadAction<number>) => {
      const index = state.all.findIndex((world) => world.id === action.payload);
      state.all.splice(index, 1);
    },
    setActiveWorldId: (state: worldsState, action: PayloadAction<number>) => {
      state.activeId = action.payload;
    },
    unsetActiveWorldId: (state: worldsState) => {
      state.activeId = null;
    },
  },
});

export const {
  addWorld,
  updateWorld,
  removeWorld,
  setActiveWorldId,
  unsetActiveWorldId,
} = worldsSlice.actions;

export const selectActiveWorld = createSelector(
  (state: RootState) => state.worlds,
  (worlds) => {
    if (worlds.activeId) {
      return worlds.all.filter(
        (world: IWorld) => world.id === worlds.activeId
      )[0];
    }

    return null;
  }
);

export default worldsSlice.reducer;
