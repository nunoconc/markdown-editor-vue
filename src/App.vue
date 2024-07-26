<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <div>
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome msg="Banana"/>
  </main>
</template>

<style scoped>
</style>
