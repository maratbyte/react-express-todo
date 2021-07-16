import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import addButton from './buttonImages/addTask.png' 

const AddTask = () => {
  const taskCount = useSelector(state => state.tasks.length);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (text) dispatch(addTask(text));
    setText('');
  };

  return (
    <form className='addForm' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={taskCount ? 'Add another target' : 'Add your first target'}
        value={text}
        onChange={event => setText(event.target.value)}
        autoFocus
      />
      <button><img src={addButton} /></button>
    </form>
  )
}

export default AddTask
