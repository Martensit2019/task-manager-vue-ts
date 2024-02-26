<template>
  <div class="modal" @click.self="emit('close')">
    <div class="modal__wrapper">
      <IconSprite
        id="modal_close"
        class="modal__close"
        name="close"
        color="#86949e"
        @click="emit('close')"
      />
      <div class="modal__header">
        <div class="modal__title">{{ props.title }}</div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer">
        <Button @click="emit('remove')">Удалить</Button>
        <Button @click="emit('close')">Отменить</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
const props = defineProps<IProps>()

interface IEmits {
  (e: 'close'): void
  (e: 'remove'): void
}

const emit = defineEmits<IEmits>()
</script>

<style scoped lang="scss">
@import 'modal.scss';
</style>
