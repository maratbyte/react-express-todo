import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, deleteTask } from '../redux/tasksSlice';

const TaskItem = ({ id }) => {
  const task = useSelector(state => state.tasks.find(task => task.id === id));
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={task.done}
        onClick={() => dispatch(toggleDone(task.id))}
      />
      <h2>{task.title}</h2>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  )
}

export default TaskItem