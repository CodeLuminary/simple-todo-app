import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from '../store';

// Define a type for the slice state

interface list{
  id: number,
  task: string,
  is_completed: boolean,
  created_at: string,
  completed_at: string
};

interface ToDoState {
  value: list[];
};

// Define the initial state using that type
const initialState: ToDoState = {
  value: []
}

export const todoListSlice = createSlice({
  name: 'todoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTodoList: (state, action: PayloadAction<list[]>) => {
      state.value = action.payload
    }
  }
})

export const { setTodoList } = todoListSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default todoListSlice.reducer