<template>
  <div :class="['notification', { active: isShow }, `notification_${notificationStatus}`]">
    <IconSprite
      id="notification_close"
      class="notification__close"
      name="close"
      color="#86949e"
      @click="closeNotification"
    />
    <div :class="['notification__status', `notification__status_${notificationStatus}`]">
      <IconSprite
        id="notification"
        :name="notificationStatus === 'success' ? 'check' : 'close'"
        viewBox="-2 -2 20 20"
        color="white"
      />
    </div>
    <div class="notification__content">
      <div class="notification__title">{{ notificationTitle }}</div>
      <div class="notification__text">{{ notificationText }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  isShow,
  notificationTitle,
  notificationText,
  notificationStatus,
  closeNotification
} from '../../../components/TasksBoard/tasks'
import type { TStatus } from '../../TasksBoard/interfaceTasks'
interface IProps {
  title: string
  text: string
  status?: TStatus
}

withDefaults(defineProps<IProps>(), {
  status: 'success'
})
</script>

<style scoped lang="scss">
@import 'notification';
</style>
