export default function TaskStats({ pendingCount }) {
  const label = pendingCount === 1 ? 'tarea pendiente' : 'tareas pendientes'

  return (
    <footer className="task-stats" aria-live="polite">
      <strong>{pendingCount}</strong> {label}
    </footer>
  )
}
