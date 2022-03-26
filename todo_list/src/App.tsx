import React from 'react';
import './css/App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {
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
