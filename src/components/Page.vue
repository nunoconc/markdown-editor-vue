<script setup>
import {marked} from "marked";
import MarkdownToJSX from 'markdown-to-jsx';
import {onMounted, ref} from "vue";

defineProps({
  text: {
    type: String,
    required: true
  }
})

const markdown = ref("");

onMounted(()=>{
   const res = marked.parse("# Example");

   if(typeof res == "string"){
     markdown.value = res;
   } else {
     res.then((value) => {
       markdown.value = value;
     })
   }
})


</script>

<template>
  <div>
    <h1>Check your output result:</h1>
    <MarkdownToJSX :children="text"/>
    <h1>Check your output result:</h1>
    <div ref="markdown"></div>
  </div>
</template>

<style scoped>
</style>
