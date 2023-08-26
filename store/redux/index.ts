import { configureStore } from "@reduxjs/toolkit";
import worldsReducer from "./worlds.reducer";
import entriesReducer from "./entries.reducer";
import templatesReducer from "./templates.reducer";
import countsReducer from "./counts.reducer";

const store = configureStore({
  reducer: {
    counts: countsReducer,
    entries: entriesReducer,
    templates: templatesReducer,
    worlds: worldsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
