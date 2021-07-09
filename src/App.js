import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import WelcomeMsg from './components/WelcomeMsg'

const App = () => {
  const [tasks, setTasks] = useState([])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (text) => {
    const id = tasks.length ? tasks.reduce((maxId, {id}) => id > maxId ? id : maxId, 0) + 1 : 0
    setTasks([...tasks, {id, text, done: false}])
  }

  const checkTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, done: !task.done} : task))
  }

  return (
    <div className='App'>
      <Header title='Dragons To Slay:' />
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onCheck={checkTask} /> : <WelcomeMsg />}
      <AddTask tasks={tasks} onAdd={addTask} />
    </div>
  )
}

export default App
