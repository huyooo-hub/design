<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { PropType } from 'vue'
const props = defineProps({
  tree: {
    type: Array as PropType<any[]>,
    required: true,
    default: () => []
  }
})
const route = useRoute()
// const { navBottomLink } = useContentHelpers()
const isActive = (link: any) =>
  link.exact
    ? route.fullPath === link._path
    : route.fullPath.startsWith(link._path)
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in props.tree" :key="link._path">
        <NuxtLink
          class="link"
          :to="link.redirect ? link.redirect : link.path"
          :class="{ active: isActive(link) }"
        >
          <Icon v-if="link.icon" :name="link.icon" />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="less">
nav {
  display: block;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    & > * + * {
      margin-left: 0.5rem;
    }

    li {
      display: inline-flex;
      gap: 0.25rem;
    }

    .link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      border-radius: 0.5rem;
      outline: none;
      transition: background 200ms ease;

      svg {
        display: inline-block;
      }

      &:active,
      &.active,
      &:hover {
        background-color: #121110;
        // background-color: #10b981;
      }

      &.active {
        box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
        // font-weight: bold;
        color: #10b981;
      }
    }
  }
}
</style>
