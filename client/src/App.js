import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import WelcomeMsg from './components/WelcomeMsg'
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getTasksAsync } from './redux/tasksSlice';
import './styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);
  
  const taskCount = useSelector(state => state.tasks.length);

  return (
    <div className='app'>
      <Header title='Dragons To Slay:' />
      {taskCount ? <TaskList /> : <WelcomeMsg />}
      <AddTask />
    </div>
  )
}

export default App
