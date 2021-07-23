import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import WelcomeMsg from './components/WelcomeMsg'
import { useSelector } from 'react-redux';

const App = () => {
  const taskCount = useSelector(state => state.tasks.length);

  return (
    <div className='App'>
      <Header title='Dragons To Slay:' />
      {taskCount ? <TaskList /> : <WelcomeMsg />}
      <AddTask />
    </div>
  )
}

export default App
