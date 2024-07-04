<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '50%',
  },
  zIndex: {
    type: String,
    default: '10',
  },
  top: {
    type: String,
    default: '20%',
  },
  left: {
    type: String,
    default: '0%',
  },
  right: {
    type: String,
    default: 'auto',
  },
  blur: {
    type: String,
    default: '50px',
  },
  colors: {
    type: Array as () => string[],
    default: () => [
      'rgba(0, 71, 225, 0.05)',
      'rgba(26, 214, 255, 0.05)',
      'rgba(0, 220, 130, 0.05)',
    ],
  },
});

const ellipsisStyle = computed<any>(() => ({
  pointerEvents: 'none',
  position: 'absolute',
  top: props.top,
  insetInlineStart: props.left,
  insetInlineEnd: props.right,
  zIndex: props.zIndex,
  width: props.width,
  height: props.height,
  filter: `blur(${props.blur})`,
}));

const ellipsisItemStyle = computed(() => ({
  width: '100%',
  height: '100%',
  background: `linear-gradient(0deg, ${props.colors[0]} 10%, ${props.colors[1]} 50%, ${props.colors[2]} 100%)`,
}));
</script>

<template>
  <div class="ellipsis" :style="ellipsisStyle">
    <div class="ellipsis-item" :style="ellipsisItemStyle" />
  </div>
</template>

<style scoped>
.ellipsis {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.ellipsis-item {
  width: 100%;
  height: 100%;
}
</style>
