<template>
  <div
    class="code-block"
    :class="{
      active,
      'rounded-lg p-4': preview,
    }"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    default: false,
  },

  preview: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="less">
.code-block {
  display: none;
}

.code-block.active {
  display: block;
}
</style>
