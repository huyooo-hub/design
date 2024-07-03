<script setup lang="ts">
import { ref, computed } from 'vue'
import FilterList from './UProFilterList.vue'
import type { PropType } from 'vue'
const emit = defineEmits(['select'])
const props = defineProps({
  links: {
    type: Array as PropType<any>,
    default: () => []
  },
  level: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: null
  }
})
const active = ref(null)
if (props.links.length !== 0) {
  active.value = props.links[0].value
}


const isActive = (link: any) => {
  console.log(active.value, link.value, 'link.value.value')
  return active.value === link.value
}

const isCollapsed = (link: any) => {
  if (link.children) {
    // Check if aside.collapsed has been set in YML
    if ([true, false].includes(link?.aside?.collapsed)) {
      return link.aside.collapsed
    }

    // Return value grabbed from the link
    if (link?.collapsed) {
      return link?.collapsed
    }
  }

  return false
}

const toggleCollapse = (link: any) => {
  console.log(link)
}
function clickLink (link: any) {
  console.log(link, 'linklink')
  active.value = link.value
  emit('select', active.value)
}
const hasNesting = computed(() =>
  props.links.some((link: any) => link.children)
)
</script>

<template>
  <ul class="docs-aside-tree">
    <li
      v-for="link in links"
      :key="link.value"
      :class="{
        'has-children': level > 0 && link.children,
        bordered: level > 0 || !hasNesting,
        active: isActive(link),
      }"
    >
      <button
        v-if="link.children"
        class="title-collapsible-button"
        @click="toggleCollapse(link)"
      >
        <span class="content">
          <Icon
            v-if="link?.navigation?.icon || link.icon"
            :name="link?.navigation?.icon || link.icon"
            class="icon"
          />
          <span>{{ link?.navigation?.title || link.title || link.value }}</span>
        </span>
        <span>
          <Icon
            :name="
              isCollapsed(link)
                ? 'lucide:chevrons-up-down'
                : 'lucide:chevrons-down-up'
            "
            class="collapsible-icon"
          />
        </span>
      </button>

      <div
        v-else
        class="link"
        :class="{
          padded: level > 0 || !hasNesting,
          active: isActive(link),
        }"
        @click="clickLink(link)"
      >
        <span class="content">
          <Icon
            v-if="link?.navigation?.icon || link.icon"
            :name="link?.navigation?.icon || link.icon"
            class="icon"
          />
          <span>{{ link?.navigation?.title || link.title || link.value }}</span>
        </span>
      </div>

      <FilterList
        v-show="!isCollapsed(link)"
        v-if="link.children?.length && (max === null || level + 1 < max)"
        :links="link.children"
        :level="level + 1"
        :max="max"
        class="recursive"
      />
    </li>
  </ul>
</template>

<style scoped lang="less">
.docs-aside-tree {
  li {
    &.bordered {
      cursor: pointer;
      border-left: 1px solid #121110;
      &:hover {
        border-color: #201e1b;
      }
      &.active {
        border-color: #059669;
      }
      &.has-children {
        padding-left: 1rem;
      }
    }
  }

  .recursive {
    padding: 0.5rem 0;
  }

  .title-collapsible-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
    width: 100%;
    color: #fbfbfb;

    .content {
      display: flex;
      align-items: center;

      .icon {
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
    }

    .collapsible-icon {
      width: 0.75rem;
      height: 0.75rem;
      color: #97948f;
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.375rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #97948f;

    &:hover {
      color: #121110;
    }

    &:not(.active) {
      color: #ada9a4;
      &:hover {
        color: #fbfbfb;
      }
    }

    &.padded {
      padding-left: 1rem;
    }

    &.active {
      color: #10b981;
      font-weight: 500;
    }

    .content {
      display: inline-flex;
      align-items: center;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      margin-right: 0.25rem;
    }
  }
}
</style>
