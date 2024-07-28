<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>Write here your markdown text:</h1>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
</style>
