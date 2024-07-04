<script setup lang="ts">
import UProIcon from "./UProIcon.vue";
let props = defineProps({
  logo: {
    type: String,
    required: true,
    default: () => "",
  },
  title: {
    type: String,
    required: true,
    default: () => "",
  },
});
</script>

<template>
  <NuxtLink class="navbar-logo" to="/" :aria-label="props.title">
    <div class="header">
      <UProIcon
        :name="props.logo"
        filled
        v-if="props.logo"
        class="logo"
      ></UProIcon>
      <span class="title" v-if="props.title">
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
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
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
