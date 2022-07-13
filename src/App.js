

import './tailwind.css'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Heading from './components/Heading';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
<div className='App'>
<div className='app-2'>
<GlobalProvider>
<BrowserRouter >
<Heading/>
<Routes>
<Route path='/edit/:id'element={<TaskForm/>}/>
  <Route path='/add'element={<TaskForm/>}/>
  <Route path='/'element={<TaskList/>}/>
</Routes>
</BrowserRouter>
</GlobalProvider>
</div>
</div>
  );
}

export default App;
