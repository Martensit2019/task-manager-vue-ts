import { tasks } from '../components/TasksBoard/tasks'
// import { tasks } from '../components/Tasks/tasks'

export const loadState = () => {
  const initialState = localStorage.getItem('tasks')
  tasks.value = initialState ? JSON.parse(initialState) : []
}

export const saveState = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}