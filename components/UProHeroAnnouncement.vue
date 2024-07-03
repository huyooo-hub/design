<script setup>
defineProps({
  to: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NuxtLink :to="to" class="link">
    <Icon name="heroicons-solid:sparkles" class="icon" />
    <span>{{ label }}</span>
  </NuxtLink>
</template>

<style scoped lang="less">
.link {
  color: #d1fae5;
  background-color: transparent;
  border-color: #047857;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  display: inline-flex;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  &:hover {
    background-color: #064e3b;
  }

  span {
    font-weight: 500;
    font-size: 0.875rem;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
