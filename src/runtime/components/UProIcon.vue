<template>
  <span
    class="my-icon"
    :class="{
      'my-icon--fill': !filled,
      'my-icon--stroke': hasStroke && !filled,
    }"
    v-html="icon"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: () => '',
  },
  filled: {
    type: Boolean,
    required: false,
    default: () => false,
  },
  size: {
    type: Number,
    required: false,
    default: () => 24,
  },
});
const icon = ref<string | Record<string, any>>('');
let hasStroke = false;

async function getIcon() {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      query: '?raw',
      import: 'default',
      eager: false,
    });
    const rawIcon = (await iconsImport[
      `/assets/icons/${props.name}.svg`
    ]()) as unknown as string;
    if (rawIcon.includes('stroke')) {
      hasStroke = true;
    }
    icon.value = rawIcon;
  } catch {
    console.error(
      `[my-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    );
  }
}

await getIcon();

watchEffect(getIcon);
</script>

<style>
.my-icon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
.my-icon.my-icon--fill,
.my-icon.my-icon--fill * {
  fill: currentColor !important;
}

.my-icon.my-icon--stroke,
.my-icon.my-icon--stroke * {
  stroke: currentColor !important;
}
</style>
