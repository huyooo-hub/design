<script setup lang="ts">
import type { PropType } from "vue";
import UProAsideTree from "./UProAsideTree.vue";
const props = defineProps({
  navigation: {
    required: true,
    type: Array as PropType<any[]>,
    default: () => [],
  },
  autoplay: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nav>
    <UProAsideTree
      v-if="props.navigation?.length > 0"
      :links="props.navigation"
    />
    <NuxtLink v-else to="/" class="go-back-link">
      <UProIcon name="heroicons-outline:arrow-left" class="icon" relative />
      <span class="text">Go back</span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="less">
.go-back-link {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  cursor: pointer;
  color: #97948f;

  &:hover {
    color: #36332e;
  }

  .icon {
    width: 1rem;
    height: 1rem;
  }

  .text {
    margin-left: 0.5rem;
  }
}
</style>
