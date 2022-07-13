import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../styles/taskList.scss';
import {Link} from 'react-router-dom'
const TaskList = () => {
    const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  return (
        <div className='principal'>
        
          {tasks.map(task=>(
           <div className='principal-2'key={task.id}>
           <div className='secundario'>
              <div>
              <h1 className='title'>{task.title}</h1>
                <h6 className='id'>{task.id}</h6>
              <p>{task.description}</p>
              <button onClick={()=>toggleTaskDone(task.id)}>
                {task.done?'undone':'done'}
              </button>
              </div>
              <div>
             <Link className='link' to={`/edit/${task.id}`}>Edit</Link>
                <button onClick={()=>deleteTask(task.id)}>Delete</button>
              </div>
            </div>
           </div>
          )) }
        </div>
    );
}

export default TaskList;
