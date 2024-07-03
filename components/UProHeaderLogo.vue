<script setup lang="ts">
import UProIcon from './UProIcon.vue'
const props = defineProps({
  logo: {
    type: String,
    required: true,
    default: () => ''
  },
  title: {
    type: String,
    required: true,
    default: () => ''
  }
})
</script>

<template>
  <NuxtLink class="navbar-logo" to="/" :aria-label="props.title">
    <div class="flex flex-row items-center justify-items-center">
      <UProIcon
        v-if="props.logo"
        :name="props.logo"
        filled
        class="logo"
      />
      <span v-if="props.title" class="title">
        {{ props.title }}
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="less">
.navbar-logo {
  display: flex;
  align-items: center;
  flex: none;
  height: 1.75rem;
  font-size: 24px;
  .logo {
    margin-right: 12px;

    img,
    svg {
      height: inherit;
    }

    .dark-img {
      display: block;
    }
  }

  .title {
    font-weight: 700;
    color: #f6f5f4;

    &:hover {
      color: #10b981;
    }
  }
}
</style>
