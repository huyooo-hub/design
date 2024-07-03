<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<{ label: string }[]>,
    required: true
  },
  activeTabIndex: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:activeTabIndex'])

const tabsRef = ref()

const highlightUnderline = ref()

const updateHighlightUnderlinePosition = (activeTab: any) => {
  if (!activeTab) {
    return
  }

  highlightUnderline.value.style.insetInlineStart = `${activeTab.offsetLeft}px`
  highlightUnderline.value.style.width = `${activeTab.clientWidth}px`
}

const updateTabs = ($event: any, i: any) => {
  console.log(i, 'jijijijij')
  emit('update:activeTabIndex', i)
  nextTick(() => updateHighlightUnderlinePosition($event.target))
}

watch(
  tabsRef,
  (newVal) => {
    if (!newVal) {
      return
    }

    setTimeout(() => {
      updateHighlightUnderlinePosition(
        tabsRef.value.children[props.activeTabIndex]
      )
    }, 50)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="tabs-header">
    <div v-if="tabs" ref="tabsRef" class="tabs">
      <button
        v-for="({ label }, i) in tabs"
        :key="`${i}${label}`"
        :class="[activeTabIndex === i ? 'active' : 'not-active']"
        @click="updateTabs($event, i)"
      >
        {{ label }}
      </button>
      <span ref="highlightUnderline" class="highlight-underline">
        <span class="tab" />
      </span>
    </div>

    <slot name="footer" />
  </div>
</template>

<style scoped lang="less">
.tabs-header {
  position: relative;
  background: #1c1b19;
  color: #ff3b10;

  .tabs {
    position: relative;
    z-index: 0;
    display: flex;
    // padding: 0 0.5rem;
    overflow-x: auto;

    button {
      padding: 0.625rem 1rem;
      position: relative;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        Liberation Mono, Courier New, monospace;
      font-size: 0.875rem;
      line-height: 1.25rem;
      letter-spacing: -0.02em;
      user-select: none;
      transition: color 100ms, background 100ms;

      &.not-active {
        color: #ecebe8;

        &:hover {
          color: #ecebe8;
          background: #292724;
        }
      }

      &.active {
        color: #dbd9d3;
      }
    }

    .highlight-underline {
      position: absolute;
      z-index: -1;
      top: 0;
      height: 100%;
      transition: inset-inline-start 150ms, width 150ms;

      .tab {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #121110;
      }
    }
  }
}
</style>
