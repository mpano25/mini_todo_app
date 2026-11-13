import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import TaskFilter from './components/TaskFilter.jsx'
import TaskStats from './components/TaskStats.jsx'
import './App.css'

const STORAGE_KEY = 'mini-todo-tasks'

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(savedTasks) ? savedTasks : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch {
      console.log("Algo salio mal")
    }
  }, [tasks])

  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }

    setTasks((previousTasks) => [...previousTasks, newTask])
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id),
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const pendingCount = tasks.filter((task) => !task.completed).length

  return (
    <main className="todo-card">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <TaskStats pendingCount={pendingCount} />
    </main>
  )
}
