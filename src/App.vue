<script setup>
import Markdown from './components/Markdown.vue'
import Page from './components/Page.vue'
import {onMounted, ref} from "vue";
import store from "./store";

const text = ref("");
const callback = ref((value)=>{
  text.value = value;
  store.commit('saveMarkdown', value);
})

onMounted(()=>{
  text.value = store.getters.getMarkdown;
})

</script>

<template>
  <header>
    <div class="header-container">
      Header Goes Here
    </div>
  </header>
  <main class="main-container">
    <Markdown class="item" :text="text"  :callback="callback"/>
    <Page class="item" :text="text" />
  </main>
</template>

<style scoped>

.header-container{
  margin: 0 auto 50px;
  background-color: #bac2d0;
  font-size: 40px;
  text-align: center;
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
