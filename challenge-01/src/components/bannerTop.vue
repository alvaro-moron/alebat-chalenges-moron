<script setup lang="ts">
const props = defineProps({
  width: Number,
  height: Number
})
const url = `https://picsum.photos/${props.width}/${props.height}/?random`
</script>

<template>
  <img :src="url" alt="Imagen aleatoria" />
</template>

<style scoped lang="scss"></style>
