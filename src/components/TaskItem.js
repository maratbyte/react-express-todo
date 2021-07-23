import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, deleteTask } from '../redux/tasksSlice';
import deleteButton from './buttonImages/deleteTask.png';

const TaskItem = ({ id }) => {
  const task = useSelector(state => state.tasks.find(task => task.id === id));
  const dispatch = useDispatch();

  return (
    <li className={task.done ? 'item done' : 'item'}>
      <input
        type='checkbox'
        checked={task.done}
        onClick={() => dispatch(toggleDone(task.id))}
      />
      <h2 className='taskTitle'>{task.title}</h2>
      <button className='deleteBtn' onClick={() => dispatch(deleteTask(task.id))}><img src={deleteButton} /></button>
    </li>
  )
}

export default TaskItem