<template>
  <ul class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 xl:grid-cols-3">
    <li v-for="(item, index) in props.list" :key="index">
      <div
        class="border dark:border-gray-800 dark:bg-zinc-800 border-gray-200 rounded-md p-4 transition duration-200 ease-in-out hover:border-green-400 dark:hover:border-green-400 cursor-pointer"
      >
        <div class="header">
          <img
            :src="item.icon"
            alt=""
            class="w-auto h-12"
            height="48px"
            width="48px"
          >
        </div>
        <div class="body pt-6 pb-3">
          <div>
            <h4 class="font-semibold u-text-gray-700 text-xl truncate">
              <div class="flex items-center gap-1.5">
                <p class="text-lg font-semibold">
                  {{ item.title }}
                </p>
                <div
                  class="flex items-center justify-center rounded-full bg-gradient-to-l from-green-400/30 to-teal-400/30 h-6 w-6"
                >
                  <Icon
                    name="icon-park-outline:download-one"
                    class="icon h-4 w-4 text-green-400"
                  />
                </div>
              </div>
            </h4>
          </div>
          <div
            class="u-text-gray-500 text-sm line-clamp-2 sm:min-h-[40px] mb-4"
          >
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
        <div class="footer">
          <div
            class="flex items-center justify-between gap-3 -mb-2 u-text-gray-500"
          >
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5">
                <Icon name="icon-park-outline:like" class="icon" />
                <span class="text-sm">{{ item.like }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Icon name="material-symbols:menu-book-outline" class="icon" />
                <span class="text-sm">{{ item.pv }}</span>
              </div>
            </div>
            <div
              class="flex items-center gap-1.5 text-green-400"
              @click="toLink(item.link)"
            >
              <Icon name="quill:arrow-right" class="icon" />
              <span class="text-sm">跳转</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
const props = defineProps({
  list: {
    type: Array as PropType<any>,
    default: () => []
  }
})
function toLink (url: string) {
  window.open(url)
}
</script>
