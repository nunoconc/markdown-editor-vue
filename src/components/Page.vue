<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1>Check your output result:</h1>
    <textarea
        readonly
        :value="text"
        class="text"
    >
    </textarea>
  </div>
</template>

<style scoped>

.container{
  width: 60%;
  height: 500px;
}

.text{
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
}
</style>
