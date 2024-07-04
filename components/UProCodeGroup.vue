<script setup lang="ts">
import { ref, computed, useSlots } from "vue";
import UProTabsHeader from "./UProTabsHeader.vue";

const isTag = (slot: any, tag: string) => {
  return slot.type && slot.type.name && slot.type.name === tag;
};

const props = defineProps({
  defaultTabIndex: {
    type: Number,
    default: 0,
  },
});

const activeTabIndex = ref(props.defaultTabIndex);

const updateActiveTabIndex = (index: number) => {
  console.log(index, "index");
  activeTabIndex.value = index;
};

const slots = useSlots();

const mappedSlots = computed(() => {
  return (
    slots.default?.().map((slot: any, index: number) => ({
      label: slot.props?.filename || slot.props?.label || `${index}`,
      active: slot.props?.active || false,
      component: slot,
    })) || []
  );
});
</script>

<template>
  <div class="code-group" :class="{ 'first-tab': activeTabIndex === 0 }">
    <UProTabsHeader
      ref="tabs-header"
      :active-tab-index="activeTabIndex"
      :tabs="mappedSlots"
      @update:active-tab-index="updateActiveTabIndex"
    />
    <div class="code-group-content" :text="activeTabIndex">
      <div
        v-for="(slot, index) in mappedSlots"
        :key="index"
        :style="{ display: index === activeTabIndex ? 'block' : 'none' }"
        :class="{
          '': !isTag(slot.component, 'code') && !isTag(slot.component, 'pre'),
        }"
      >
        <div
          v-if="isTag(slot.component, 'code') || isTag(slot.component, 'pre')"
        >
          <component :is="slot.component" />
        </div>
        <div v-else class="preview-canvas">
          <component :is="slot.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.code-group {
  border: 1px solid #201e1b;
  border-radius: 12px;
  overflow: hidden;

  ::v-deep(.prose-code) {
    margin: 0;
    border: none;
    border-radius: 0;
  }

  ::v-deep(.filename) {
    display: none;
  }

  .preview-canvas {
    padding: 0;
    // &:has(.sandbox) {
    //   padding: 0;

    //   ::v-deep(.sandbox) {
    //     border: 0;
    //     border-radius: 0;
    //   }
    // }
  }
}
</style>
