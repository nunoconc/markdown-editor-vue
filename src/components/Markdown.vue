<script setup lang="ts">
import store from '../store';

defineProps({
  text: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <div class="container">
    <h1 class="title">Write here ...</h1>
    <hr>
    <textarea
      class="text"
      :value="text"
      @input="(event: Event) => store.commit('saveMarkdown', (event.target as HTMLInputElement).value)"
      >
    </textarea>
  </div>
</template>

<style scoped>

.title{
  font-size: 30px;
}

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
  background-color: inherit;
  color: inherit;
}
</style>
