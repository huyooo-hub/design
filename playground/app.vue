<template>
  <div class="app">
    Nuxt module playground!
    <UProAlert>221</UProAlert>
    <UProContentSurround :surround="surround"></UProContentSurround>
  </div>
</template>

<script setup>
const surround = ref([
  {
    _path: "",
    title: "Introduction",
    description:
      "Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind.",
  },
  {
    _path: "",
    title: "Introduction",
    description:
      "Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind.",
  },
]);
</script>
<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgb(2, 4, 32);
  padding: 0;
  margin: 0;
}
.app {
  width: 100%;
  height: 100%;
}
</style>
