import TaskItem from './TaskItem'

const Tasks = ({tasks, onDelete, onCheck}) => {
  return (
    <ul>
      {tasks.map(task => <TaskItem key={task.id} task={task} onDelete={onDelete} onCheck={onCheck} />)}
    </ul>
  )
}

export default Tasks
