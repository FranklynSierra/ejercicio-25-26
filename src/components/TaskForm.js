
import React,{useState,useContext,useEffect} from 'react';
import '../styles/taskForm.scss'
import { GlobalContext } from '../context/GlobalContext';
import {useNavigate,useParams} from 'react-router-dom'

const TaskForm = () => {
    const [task, setTask] = useState({
      id:'',  
      title:'',
        description:''
    });
const {addTask,tasks,updateTask}=  useContext(GlobalContext)
   
   

const handleChange=e=>{
   
    setTask({ ...task, [e.target.name]: e.target.value });
}

const navigate = useNavigate();
const params = useParams();
const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/");
  };
  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, task]);

    return (
        <div className='principal'>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h2>{task.id?'Editing':'creating'}</h2>
                <div className='secundadio'>
                  <input value={task.title} onChange={handleChange} className='input' placeholder='Write a tilte' name='title' type='text'></input>  
                </div>
                <div className='secundadio'>
                <textarea  onChange={handleChange} name='description 'rows='2'placeholder='Write the description'className='textarea'></textarea>
                
                </div>
                <button className='boton'>{
                  task.id?'edit':'create'
                }</button>

            </form>
            </div>
        </div>
    );
}

export default TaskForm;
