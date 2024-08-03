<script setup lang="ts">
import Markdown from './components/Markdown.vue';
import Page from './components/Page.vue';
import {onMounted, ref, watch} from 'vue';
import store from './store';

const text = ref("");
const url = ref("");

onMounted(()=>{
  text.value = store.state.markdown;
})

watch(store.state, (state)=>{
  text.value = state.markdown;
  url.value = state.url;
})

</script>

<template>
  <header>
    <div class="header-container">
      <h1 class="title">Markdown Editor</h1>
      <button class="action-download" @click.prevent="store.dispatch('downloadMarkdown')">Download</button>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.action-download{
  background: #e5ddd1;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  padding: 12px 16px;
  text-decoration: none;
}

.action-download:hover {
  background: #a4a29d;
}

.action-download:active {
  position:relative;
  top:1px;
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
