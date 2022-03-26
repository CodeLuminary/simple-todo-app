/*
    This is just a replica of todoListReducer but all actions apart for the
    setTodoList action will be O(1) computation.
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//import type { RootState } from '../store';

// Define a type for the slice state

let counter: number = 0;
//let length: number = 0;

interface list{
  id?: number,
  task: string,
  is_completed: boolean,
  created_at?: string,
  completed_at?: string
};

interface ToDoList{
    id: list
}

interface ToDoState {
  value: ToDoList | {},
  number_of_list: number
};

// Define the initial state using that type
const initialState: ToDoState = {
  value: {},
  number_of_list: 0
}

export const todoListSlice = createSlice({
  name: 'todoList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setTodoList: (state, action: PayloadAction<list[]>) => {
      state.value = action.payload;
      for(let x in action.payload){
          state.number_of_list +=1;
      }
    },
    addToList: (state, action: PayloadAction<list>) =>{
        counter++;
      state.value=
        {
          ...state.value,
          counter : {
            task: action.payload.task,
            is_completed: false,
            created_at: (new Date()).toString()
          }
        }
        state.number_of_list +=1;
    },
    removeFromList: (state, action: PayloadAction<list>)=>{
      //state.value = state.value.filter( item => item.id !== action.payload.id)
      state.number_of_list -=1;
    },
    setTaskAsCompleted: (state, action: PayloadAction<list>)=>{  
        let id = action.payload.id;
      state.value = {
        ...state.value,
        id : {
            task: action.payload.task,
            is_completed: true,
            completed_at: (new Date()).toDateString(),
            created_at: action.payload.created_at
        }//.is_completed = true
      }
    }
  }
})

export const { setTodoList,addToList,removeFromList,setTaskAsCompleted } = todoListSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value

export default todoListSlice.reducer