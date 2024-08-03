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
    <h1 class="title">Check here:</h1>
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

.title{
  font-size: 30px;
}

.text{
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  background-color: inherit;
  color: inherit;
}
</style>
