<template>
  <div v-if="isText" class="task-item">
    <div class="task-item__body">{{ task.description }}</div>
    <div
      ref="refActions"
      class="task-item__actions"
    >
      <IconSprite :id="`_settings`" class="icon" name="settings" @click="openSettings" />
    </div>
    <Settings v-if="isOpenSettings" @change-visible="changeVisible" />
  </div>
  <TaskItemForm
    v-else
    :initialText="task.description"
    @cancel="isText = !isText"
    @submit="change"
  />
</template>

<script setup lang="ts">
import type { ITask } from '../TasksBoard/interfaceTasks'
import { changeTask } from '../TasksBoard/tasks'
interface IProps {
  task: ITask
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'remove'): void
  (e: 'edit'): void
}

const emit = defineEmits<IEmits>()

const isOpenSettings = ref<boolean>(false)
const isText = ref<boolean>(true)
const refActions = ref()

const openSettings = () => {
  isOpenSettings.value = !isOpenSettings.value
}
const changeVisible = (isRemove: boolean) => {
  isOpenSettings.value = !isOpenSettings.value
  if (isRemove) {
    emit('remove')
  } else {
    isText.value = !isText.value
  }
}

const change = (text: string) => {
  const updatedTask = { ...props.task, description: text }
  isText.value = true
  changeTask(updatedTask)
}
</script>

<style scoped lang="scss">
@import 'taskItem';
</style>
