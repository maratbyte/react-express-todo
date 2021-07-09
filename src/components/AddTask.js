import { useState } from 'react'

const AddTask = ({tasks, onAdd}) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={tasks.length ? 'Add another target' : 'Add your first target'}
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus

      />
      <button></button>
    </form>
  )
}

export default AddTask
