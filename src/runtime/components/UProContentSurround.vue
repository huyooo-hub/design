<template>
  <div class="UProContentSurround">
    <template v-for="(item, index) in props.surround" :key="index">
      <NuxtLink
        v-if="item"
        :to="item._path"
        :class="{
          'text-left': index === 0,
          'text-right': index === 1,
        }"
        class="item"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      >
        <div
          class="position"
          :class="{
            'hover-position': hoveredIndex === index,
          }"
        >
          <Icon v-if="index === 0" name="heroicons:arrow-left-20-solid" />
          <Icon v-if="index === 1" name="heroicons:arrow-right-20-solid" />
        </div>
        <div class="title">
          {{ item.title }}
        </div>
        <p class="description">
          {{ item.description }}
        </p>
      </NuxtLink>
      <span v-if="!item" class="hidden sm:block">&nbsp;</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "#imports";
import { type PropType } from "vue";
const props = defineProps({
  surround: {
    type: Array as PropType<Omit<any, "excerpt" | "body">[] | null>,
    required: true,
    default: () => {
      return [];
    },
  },
});
const hoveredIndex = ref<number | null>(null);
</script>
<style scoped lang="less">
.UProContentSurround {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  .item {
    border: 1px solid rgb(30, 41, 59);
    padding-bottom: 2rem;
    padding-top: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .item:hover {
    background-color: rgba(30, 41, 59, 0.5);
  }
  .position {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  // .position:hover {
  //   border: 1px solid rgba(0, 220, 130, 0.6);
  //   background-color: rgba(0, 220, 130, 0.1);
  //   color: rgb(0, 220, 130);
  // }
  .hover-position {
    border: 1px solid rgba(0, 220, 130, 0.6);
    background-color: rgba(0, 220, 130, 0.1);
    color: rgb(0, 220, 130);
  }
  .title {
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
  }
  .description {
    color: rgb(148, 163, 184);
    font-size: 14px;
    font-weight: 400;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .text-left {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
  }
  .text-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
