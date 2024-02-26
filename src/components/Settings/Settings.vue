<template>
  <div class="settings">
    <ul class="settings__list">
      <li
        v-for="option in options"
        class="settings__item"
        :key="option.action"
        @click="onClick(option.action)"
      >
        <IconSprite
          :id="`${option.action}_settings`"
          :name="option.action"
          :width="20"
          :height="20"
          color="#86949e"
        />
        <span>{{ option.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const options = [
  {
    action: 'edit',
    title: 'Редактировать',
    icon: 'edit'
  },
  {
    action: 'trash',
    title: 'Удалить',
    icon: 'trash'
  }
]

interface IEmits {
  (e: 'change-visible', isRemove: boolean): void
}

const emit = defineEmits<IEmits>()

const onClick = (action: string) => {
  const isRemove = action === 'trash'
  emit('change-visible', isRemove)
}
</script>

<style scoped lang="scss">
@import 'settings';
</style>
