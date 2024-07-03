<script setup lang="ts">
const { tree } = useDocus();
</script>

<template>
  <nav>
    <DocsAsideTree v-if="tree?.length > 0" :links="tree" />
    <NuxtLink v-else to="/" class="go-back-link">
      <Icon name="heroicons-outline:arrow-left" class="icon" />
      <span class="text">Go back</span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="ts">
css({
  '.go-back-link': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '{huyooo.text.sm.fontSize}',
    lineHeight: '{huyooo.text.sm.lineHeight}',
    cursor: 'pointer',
    color: '{huyooo.color.gray.500}',
    '&:hover': {
      color: '{huyooo.color.gray.700}',
    },
    '.icon': {
      width: '{huyooo.space.4}',
      height: '{huyooo.space.4}'
    },
    '.text': {
      marginLeft: '{huyooo.space.2}'
    }
  }
})
</style>
