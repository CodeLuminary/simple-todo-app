import {useRef,useState} from 'react';
import './css/App.css';
import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";
import type { RootState, AppDispatch } from './redux/store';
import { addToList,removeFromList, setTaskAsCompleted } from "./redux/reducers/todoListReducer";
import {RiDeleteBin2Fill} from "react-icons/ri";
import {MdOutlineBookmarkAdded} from "react-icons/md"

function App() {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const todoList = useAppSelector((state)=> state.list);
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const [task, setTask] = useState<string>("");
  //const input = useRef();

  const dispatch = useAppDispatch();

  const AddTask = (): void =>{
    dispatch(addToList({
      is_completed:false,
      task
    }));
    alert("Task added successfully")
  }

  const DeleteTask = (): void =>{
    
  }

  return (
    <div className="App">
      <div></div>
      <div>
        <div>
          <input onChange={(e)=> setTask(e.target.value)} className="input"  type="text" />
          <button className="btn" onClick={()=>AddTask()}>Add Task</button>
          <div className="table">
              {
                todoList.value.length <= 0 ?
                (""):
                (
                  <table>
                    <tr>
                      <th>S/N</th>
                      <th>Task</th>
                      <th>Created At</th>
                      <th>Is Completed</th>
                      <th>Completed At</th>
                      <th>Actions</th>
                    </tr>
                      {todoList.value.map((list,index)=>(
                        <tr key={index}>
                          <td>
                            {index+1}
                          </td>
                          <td>
                            {list.task}
                          </td>
                          <td>
                            {list.created_at}
                          </td>
                          <td>
                            {list.is_completed.toString()}
                          </td>
                          <td>
                            {list.completed_at}
                          </td>
                          <td>
                            <span onClick={()=>
                              {
                                dispatch(removeFromList(list));
                                alert("Task deleted successfully");
                              }
                            }><RiDeleteBin2Fill className="icon" /></span>
                            <span onClick={()=>{
                              dispatch(setTaskAsCompleted(list));
                              alert("Task set as completed successfully")
                            }}>
                              <MdOutlineBookmarkAdded className="icon" />
                            </span>
                          </td>
                        </tr>
                      ))}
                  </table>
                )
              }
          </div>     
        </div>
      </div>
    </div>
  );
}

export default App;
