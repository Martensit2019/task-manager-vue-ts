<template>
  <button :class="['btn', `btn_${align}`, `btn_${color}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
type TColor = 'primary' | 'active' | 'transparent'
type TAlign = 'center' | 'start'
interface IProps {
  color?: TColor
  align?: TAlign
}

withDefaults(defineProps<IProps>(), {
  color: 'primary',
  align: 'center'
})
</script>

<style scoped lang="scss">
@import 'button';
</style>
