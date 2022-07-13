export default function appReducer(state, {type,payload}) {
    switch (type) {
      case "ADD_TASK":
        return { 
            
          ...state,
          tasks: [...state.tasks, payload],
        };
      case "UPDATE_TASK": {
        const updatedTask = payload;
  
        const updatedTasks = state.tasks.map((task) => {
          if (task.id === updatedTask.id) {
            updatedTask.done = task.done;
            return updatedTask;
          }
          return task;
        });
        return {
          ...state,
          tasks: updatedTasks,
        };
      }
      case "DELETE_TASK":
        return {
            // tasks:[]
          ...state,
          tasks: state.tasks.filter((task) => task.id !== payload),
        };
      case "TOGGLE_TASK_DONE":
        case "TOGGLE_TASK_DONE":
          const updatedTasks = state.tasks.map((task) => {
            if (task.id === payload) {
              return { ...task, done: !task.done };
            }
            return task;
          });
          return {
            ...state,
            tasks: updatedTasks,
          };
        default:
          return state;
      }
    }