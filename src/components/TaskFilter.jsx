const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'active', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
]

export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className="task-filters" role="group" aria-label="Filtrar tareas">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={filter === value}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
