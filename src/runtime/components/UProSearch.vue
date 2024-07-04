<template>
  <div class="doc-search">
    <button type="button" aria-label="Search">
      <span class="content">
        <UProIcon name="docSearch" />
        <span>Search</span>
        <span>
          <kbd>⌘</kbd>
          <kbd class="kemy">K</kbd>
        </span>
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import UProIcon from "./UProIcon.vue";
</script>

<style scoped lang="less">
.doc-search {
  .kemy {
    margin-left: 0.25rem;
  }
  &:hover {
    button {
      border-color: #dbd9d3;
    }
  }

  button {
    padding: 0.5rem 1rem;

    .content {
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      color: #ada9a4;
      border-style: solid;
      border-width: 1px;
      border-color: #121110;
      font-size: 0.75rem;
      gap: 0.5rem;
      padding: 0.5rem 1rem;

      &:hover {
        color: #ecebe8;
        border-color: #36332e;
      }

      span {
        &:first-child {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
        }

        &:nth-child(2) {
          flex: none;
          display: none;
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
