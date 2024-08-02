<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  callback : {
    type: Function,
    required: true,
  }
})
</script>

<template>
  <div class="container">
    <h1>Write here your markdown text:</h1>
    <textarea
      class="text"
      :value="text"
      @input="event => callback(event.target.value)">
    </textarea>
  </div>
</template>

<style scoped>

.container{
  width: 40%;
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
