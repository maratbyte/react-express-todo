import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const ids = useSelector(state => state.tasks.map(task => task.id));

  return (
    <ul className='list'>
      {ids.map(id => <TaskItem key={id} id={id} />)}
    </ul>
  )
}

export default TaskList
