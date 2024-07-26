<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h1>HellWorld File</h1>
    <p>This is the HelloWorld file - {{ msg }}</p>
  </div>
</template>

<style scoped>
</style>
