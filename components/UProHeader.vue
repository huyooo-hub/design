<template>
  <header>
    <UProContainer>
      <div class="section left">
        <UProHeaderLogo logo="logo" title="GTP Gooo" />
      </div>

      <div class="section center">
        <UProHeaderNavigation :tree="props.tree" />
      </div>

      <div class="section right">
        <UProSearch v-if="props.showSearch" />
        <slot name="right" />
      </div>
    </UProContainer>
  </header>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import UProContainer from './UProContainer.vue'
import UProHeaderLogo from './UProHeaderLogo.vue'
import UProHeaderNavigation from './UProHeaderNavigation.vue'
import UProSearch from './UProSearch.vue'

const props = defineProps({
  tree: {
    type: Array as PropType<any[]>,
    required: true,
    default: () => []
  },
  showSearch: {
    type: Boolean,
    required: true,
    default: () => true
  }
})
</script>

<style scoped lang="less">
.navbar-logo {
  .left & {
    .has-dialog & {
      display: block;
    }
  }
  .center & {
    display: none;
  }
}

header {
  backdrop-filter: saturate(200%) blur(20px);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  border-bottom: 1px solid #121110;
  background-color: #0c0d0ccc;
  height: 64px;

  .container {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .section {
    display: flex;
    align-items: center;
    flex: none;

    &.left {
      grid-column: span 4 / span 4;
      margin-left: 0;
    }

    &.center {
      grid-column: span 4 / span 4;
      justify-content: center;
      flex: 1;
      z-index: 1;
    }

    &.right {
      display: flex;
      grid-column: span 4 / span 4;
      justify-content: flex-end;
      align-items: center;
      flex: none;
      margin-right: calc(0px - 1rem);
    }
  }
}
</style>
