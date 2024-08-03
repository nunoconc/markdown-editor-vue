<script setup lang="ts">
import Markdown from './components/Markdown.vue';
import Page from './components/Page.vue';
import {onMounted, ref, watch} from 'vue';
import store from './store';

const text = ref("");

onMounted(()=>{
  text.value = store.state.markdown;
})

watch(store.state, (state)=>{
  text.value = state.markdown;
})

</script>

<template>
  <header>
    <div class="header-container">
      <h1 class="title">Markdown Editor</h1>
    </div>
  </header>
  <main class="main-container">
    <Markdown class="item" :text="text" />
    <Page class="item" :text="text" />
  </main>
</template>

<style scoped>

.header-container{
  margin: 50px 20px;
  text-align: initial;
}

.title{
  font-size: 40px;
}

.main-container {
  display: flex;
  flex-direction: row;
  margin: 0;
}

.item {
  margin: auto 20px;
  align-self: center;
}

</style>
