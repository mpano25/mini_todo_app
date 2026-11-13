import { useState } from 'react'

export default function TaskForm({ addTask }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const cleanText = text.trim()
    if (!cleanText) return

    addTask(cleanText)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-input">Nueva tarea</label>
      <div className="form-row">
        <input
          id="task-input"
          type="text"
          placeholder="Ej. Estudiar para examen"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="add-button" type="submit">Agregar</button>
      </div>
    </form>
  )
}
