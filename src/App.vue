<script setup>
import Markdown from './components/Markdown.vue'
import Page from './components/Page.vue'
import {onMounted, ref} from "vue";

const text = ref("");

onMounted(()=>{
  text.value = '#Example \n dasljjdad ##ljdajda  *ndadsad'
})

</script>

<template>
  <header class="header-container">
    <div>
      Header Goes Here
    </div>
  </header>
  <main class="main-container">
    <Markdown :text="text" />
    <Page :text="text" />
  </main>
</template>

<style scoped>

.header-container{
  margin-top: 0;
}

.main-container {
  display: flex;
  flex-direction: row;
  margin: auto;
}

</style>
