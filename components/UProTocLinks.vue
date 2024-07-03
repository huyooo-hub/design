<template>
  <ul class="docs-toc-links">
    <li v-for="link in links" :key="link.text" :class="[`depth-${link.depth}`]">
      <a
        :href="`#${link.id}`"
        :class="[activeHeadings.includes(link.id) && 'active']"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>
      <DocsTocLinks
        v-if="link.children"
        :links="link.children"
        @move="childMove($event)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import DocsTocLinks from './UProDocsLinks.vue'
import type { PropType } from 'vue'
import { useScrollspy } from '../../composables/useScrollspy'
defineProps({
  links: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

const emit = defineEmits(['move'])

const router = useRouter()

const { activeHeadings, updateHeadings } = useScrollspy()

if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...Array.from(document.querySelectorAll('.page-body-doc h1')),
      ...Array.from(document.querySelectorAll('.page-body-doc h2')),
      ...Array.from(document.querySelectorAll('.page-body-doc h3')),
      ...Array.from(document.querySelectorAll('.page-body-doc h4'))
    ])
  }, 300)
}

function scrollToHeading (id: string) {
  router.push(`#${id}`)
  emit('move', id)
}

function childMove (id: string) {
  emit('move', id)
}
</script>

<style scoped lang="less">
.docs-toc-links {
  & .depth-3 {
    padding-left: 0.75rem;
  }
  & .depth-4 {
    padding-left: 1.5rem;
  }
  a {
    display: block;
    padding: 0.25rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #97948f;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 0.75rem;
    &:not(.active):hover {
      color: #ada9a4;
    }
    &.active {
      color: #10b981;
    }
  }
}
</style>
