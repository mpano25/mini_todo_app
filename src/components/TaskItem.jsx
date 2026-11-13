export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      </label>
      <button
        className="delete-button"
        type="button"
        aria-label={`Eliminar tarea: ${task.text}`}
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </li>
  )
}
