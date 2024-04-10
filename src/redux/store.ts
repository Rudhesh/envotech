import { configureStore } from '@reduxjs/toolkit';
import filterDataReducer from '../features/data/filterDataSlice';
import userDataItemReducer from './../features/data/pwSlice'; // Adjust the path

const store = configureStore({
  reducer: {
    userDataItem: userDataItemReducer,
    filterData: filterDataReducer
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
