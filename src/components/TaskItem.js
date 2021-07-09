const TaskItem = ({task, onDelete, onCheck}) => {
  return (
    <li>
      <input type='checkbox'  checked={task.done} onChange={() => onCheck(task.id)} />
      <h2>{task.text}</h2>
      <button onClick={() => onDelete(task.id)}></button>
    </li>
  )
}

export default TaskItem
