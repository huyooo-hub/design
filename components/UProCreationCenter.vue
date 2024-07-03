<script setup lang="ts">
import { ref } from 'vue'
import UProAsideTree from './UProAsideTree.vue'

const tree = ref([
  {
    icon: 'file-icons:sandbox',
    title: '创作中心',
    _path: '/creation-center',
    children: [
      {
        icon: 'file-icons:sandbox',
        title: 'introduction',
        _path: '/docs/get-started/introduction'
      }
    ]
  }
])
console.log(tree.value, 'treetree11')
</script>

<template>
  <nav>
    <UProAsideTree v-if="tree?.length > 0" :links="tree" />
    111
    <!-- <NuxtLink v-else to="/" class="go-back-link">
      <Icon name="heroicons-outline:arrow-left" class="icon" />
      <span class="text">Go back</span>
    </NuxtLink> -->
  </nav>
</template>

<style scoped lang="less">
.go-back-link {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  color: #97948f;

  &:hover {
    color: #36332e;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }

  .text {
    margin-left: 0.5rem;
  }
}
</style>
