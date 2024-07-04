<template>
  <div class="docs-toc">
    <template v-if="props.links.length > 0">
      <div class="docs-toc-title">
        <span>目录</span>
        <Icon name="mdi:chevron-right" class="icon" />
      </div>
      <UProTocLinks :links="props.links" @move="move" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
function move() {
  emit("move");
}
const emit = defineEmits(["move"]);
import UProTocLinks from "./UProTocLinks.vue";

const props = defineProps({
  links: {
    type: Array as PropType<any[]>,
    required: true,
    default: () => {
      return [];
    },
  },
});
</script>

<style scoped lang="less">
.docs-toc {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .docs-toc-title {
    display: block;
    overflow: hidden;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
}
</style>
