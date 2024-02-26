<template>
  <form class="form" @submit="onSubmit">
    <textarea
      ref="refText"
      class="form__body"
      placeholder="Введите текст..."
      v-model="text"
    ></textarea>
    <div class="form__actions" style="">
      <IconSprite :id="`_settings`" class="icon-close" name="close" @click="onCancel" />
      <IconSprite :id="`_settings`" class="icon-check" name="check" @click="onSubmit" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { openNotification } from '../TasksBoard/tasks'
interface IProps {
  initialText?: any
}

const props = withDefaults(defineProps<IProps>(), {
  initialText: ''
})

interface IEmits {
  (e: 'cancel'): void
  (e: 'submit', task: any): void
}

const emits = defineEmits<IEmits>()

const text = ref<string>(props.initialText)
const refText = ref()

const onSubmit = () => {
  if (!text.value) {
    openNotification('Ошибка', 'Описание задачи не может быть пустым', 'danger')
    return
  }

  emits('submit', text.value)
  text.value = ''
}
const onCancel = () => {
  emits('cancel')
}

const listener = (el: any) => {
  el.addEventListener('keyup', (e: { target: { scrollHeight: number } }) => {
    el.style.height = '50px'
    let scHeight = e.target.scrollHeight
    el.style.height = scHeight + 'px'
  })
}

onMounted(() => {
  refText.value.focus()
  listener(refText.value)
})
</script>

<style scoped lang="scss">
@import 'taskItemForm';
</style>
