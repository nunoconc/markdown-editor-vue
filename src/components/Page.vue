<script setup lang="ts">
import { translateMarkdownToHTML } from '../helpers/markdownHelper';

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1 class="title">Result</h1>
    <hr>
    <div
        class="text"
        v-html="translateMarkdownToHTML(text)"
    >
    </div>
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
  overflow-y: scroll;
}
</style>
