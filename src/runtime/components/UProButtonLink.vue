<script setup lang="ts">
defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    default: "primary",
  },
  href: {
    type: String,
    required: true,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtLink
    class="button-link"
    :to="href"
    :target="blank ? '_blank' : undefined"
  >
    <button
      class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
    >
      <Icon v-if="icon" :name="icon" />
      <ContentSlot :use="$slots.default" unwrap="p ul li" />
    </button>
  </NuxtLink>
</template>

<style scoped lang="less">
// .button-link {
//   display: inline-flex;
//   flex: none;
//   align-items: center;
//   border-radius: 12px;
//   transition: color 100ms ease-in-out;
//   font-weight: 700;
//   color: #ffffff;
//   background-color: #fbfbfb;
//   border: 1px solid transparent;

//   &:hover {
//     background-color: #ada9a4;
//   }

//   &:focus {
//     border: 1px solid #fbfbfb;
//   }

//   .icon {
//     margin-inline-end: 0.25rem;
//   }

//   // 尺寸变体
//   &.small {
//     padding: 0.5rem 1rem;
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//   }

//   &.medium {
//     padding: 0.625rem 1.25rem;
//     font-size: 0.875rem;
//     line-height: 1.5rem;
//   }

//   &.large {
//     padding: 0.75rem 1.5rem;
//     font-size: 1.125rem;
//     line-height: 1.75rem;
//   }

//   &.giant {
//     padding: 1rem 2rem;
//     font-size: 1.125rem;
//     line-height: 1.75rem;
//   }

//   // 透明变体
//   &.transparent {
//     background-color: transparent;
//   }
// }
</style>
