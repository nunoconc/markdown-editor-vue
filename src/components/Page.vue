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
    <h1>Check your output result:</h1>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
</style>
