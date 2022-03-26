import React from 'react';
import './css/App.css';
import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import type { RootState, AppDispatch } from './redux/store';

function App() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const todoList = useAppSelector((state)=> state.list);
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div></div>
      <div>
        <div>
          <input className="input" type="text" />
          <button className="btn">Add Task</button>
          <div className="table">
              
          </div>     
        </div>
      </div>
    </div>
  );
}

export default App;
