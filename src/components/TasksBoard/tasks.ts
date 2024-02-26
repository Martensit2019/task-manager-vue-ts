import { ref } from 'vue'
import { type ITask, type TStatus } from './interfaceTasks'
import { tasksInitial } from './dataTasks'
import { titleCategory } from './dataCategories'

const generateUniqueIid = (): string => 'id' + Math.random().toString(16).slice(2)

export const tasks = ref<ITask[]>(tasksInitial.value)
export const isShow = ref<boolean>(false)
export const notificationTitle = ref<string>()
export const notificationText = ref<string>()
export const notificationStatus = ref<TStatus>()

export const onDragStart = (e: DragEvent, task: ITask) => {
  if (e.dataTransfer) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('itemId', task.id.toString())
  }
}

export const onDrop = (e: DragEvent, categoryId: number) => {
  if (e.dataTransfer) {
    const itemId = e.dataTransfer.getData('itemId')
    tasks.value = tasks.value.map((task: ITask) => {
      if (task.id == itemId) task.categoryId = categoryId
      return task
    })
    const title = `Задача перенесена в «${titleCategory(categoryId)}»`
    const text = tasks.value.filter((task: ITask) => task.id === itemId)[0].description
    openNotification(title, text)
  }
}

export const onRemove = (taskId: string) => {
  const text = tasks.value.filter((task: ITask) => task.id === taskId)[0].description
  tasks.value = tasks.value.filter((task: ITask) => task.id !== taskId)
  openNotification('Задача удалена', text)
}

export const addTask = (description: string, categoryId: number) => {
  const newTask = {
    id: generateUniqueIid(),
    description,
    categoryId
  }
  tasks.value.push(newTask)
  const title = `Задача создана в «${titleCategory(categoryId)}»`
  openNotification(title, newTask.description)
}

export const changeTask = (updatedTask: ITask) => {
  const idx = tasks.value.findIndex((task) => task.id === updatedTask.id)
  tasks.value[idx] = updatedTask
}

export const openNotification = (title: string, text: string, status?: TStatus) => {
  notificationTitle.value = title
  notificationText.value = text
  notificationStatus.value = status
  isShow.value = true
  setTimeout(() => (isShow.value = false), 1500)
}
export const closeNotification = () => {
  isShow.value = false
}
