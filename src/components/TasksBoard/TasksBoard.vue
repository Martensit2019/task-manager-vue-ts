<template>
  <div class="tasks-board">
    <TaskCategory
      v-for="category in categories"
      :category="category"
      :key="category.id"
      @dragover.prevent
      @dragenter.prevent
      @drop="onDrop($event, category.id)"
      @open-modal="openModal"
      @add-task="addTask"
    />
  </div>
  <Modal
    v-if="isVisibleRemoveTask"
    title="Удалить задачу?"
    @close="isVisibleRemoveTask = false"
    @remove="remove"
  >
    {{ removedTask?.description }}
  </Modal>

  <Notification title="title" text="text" />
</template>

<script setup lang="ts">
import type { ITask } from './interfaceTasks'
import { categories } from './dataCategories'
import { onDrop, onRemove, addTask } from './tasks'

const isVisibleRemoveTask = ref<boolean>(false)
const removedTask = ref<ITask>()

const openModal = (task: ITask) => {
  removedTask.value = task
  isVisibleRemoveTask.value = true
}

const remove = () => {
  if (removedTask.value) onRemove(removedTask.value.id)
  isVisibleRemoveTask.value = false
}
</script>

<style scoped lang="scss">
@import 'tasksBoard';
</style>
