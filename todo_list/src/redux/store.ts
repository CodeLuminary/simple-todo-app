import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './reducers/todoListReducer';

export const store = configureStore({
  reducer: {
    list: todoListReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch