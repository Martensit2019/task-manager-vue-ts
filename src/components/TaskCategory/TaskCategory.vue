<template>
  <div class="task-category">
    <div class="task-category__title" :style="{ backgroundColor: category.bgc }">
      {{ category.title }}
    </div>
    <div class="task-category__body">
      <div
        v-for="task in tasks.filter((t) => t.categoryId === props.category.id)"
        class="task-item"
        :key="task.id"
        draggable="true"
        @dragstart="onDragStart($event, task)"
      >
        <TaskItem :task="task" @remove="remove(task)" />
      </div>
      <Button v-if="isAddBtn" align="start" color="active" @click="isAddBtn = false"
        >+ Добавить</Button
      >
      <TaskItemForm v-else @cancel="isAddBtn = true" @submit="addTask" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ICategory, ITask } from '../TasksBoard/interfaceTasks'
import { tasks, onDragStart } from '../TasksBoard/tasks'
interface IProps {
  category: ICategory
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'open-modal', task: ITask): void
  (e: 'add-task', description: string, categoryId: number): void
}

const emit = defineEmits<IEmits>()

const isAddBtn = ref<boolean>(true)

const addTask = (descr: string) => {
  emit('add-task', descr, props.category.id)
  if (descr) isAddBtn.value = true
}

const remove = (task: ITask) => {
  emit('open-modal', task)
}
</script>

<style scoped lang="scss">
@import 'taskCategory';
</style>
