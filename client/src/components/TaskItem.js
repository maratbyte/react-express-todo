import { useSelector, useDispatch } from 'react-redux';
import { toggleDoneAsync, deleteTaskAsync } from '../redux/tasksSlice';
import deleteButton from './buttonImages/deleteTask.png';

const TaskItem = ({ id }) => {
  const task = useSelector(state => state.tasks.find(task => task._id === id));
  const dispatch = useDispatch();

  return (
    <li className={task.done ? 'item done' : 'item'}>
      <input
        type='checkbox'
        checked={task.done}
        onChange={() => dispatch(toggleDoneAsync(task))}
      />
      <h2 className='taskTitle'>{task.title}</h2>
      <button className='deleteBtn' onClick={() => dispatch(deleteTaskAsync(task._id))}><img src={deleteButton} alt='' /></button>
    </li>
  )
}

export default TaskItem