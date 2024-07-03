<template>
  <div class="grid gap-8 sm:grid-cols-2 cursor-pointer">
    <template v-for="(item, index) in props.surround" :key="index">
      <NuxtLink
        v-if="item"
        :to="item._path"
        :class="{ 'text-left': index === 0, 'text-right': index === 1 }"
        class="block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
      >
        <div
          class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50"
        >
          <Icon v-if="index === 0" name="heroicons:arrow-left-20-solid" />
          <Icon v-if="index === 1" name="heroicons:arrow-right-20-solid" />
        </div>
        <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">
          {{ item.title }}
        </p>
        <p
          class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"
        >
          {{ item.description }}
        </p>
      </NuxtLink>
      <span v-if="!item" class="hidden sm:block">&nbsp;</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
const props = defineProps({
  surround: {
    type: Array as PropType<Omit<any, 'excerpt' | 'body'>[] | null>,
    required: true,
    default: () => {
      return []
    }
  }
})
</script>
