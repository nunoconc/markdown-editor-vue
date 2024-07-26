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
    <h1>This is the The Welcome File</h1>
    <p> This is the paragraph - {{ msg }}</p>
  </div>
</template>
