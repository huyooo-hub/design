<template>
  <NuxtLink
    v-for="item in props.socials"
    :key="item.label"
    rel="noopener noreferrer"
    :title="item.label"
    :aria-label="item.label"
    :href="item.href"
    target="_blank"
    class="AppSocialIcons"
  >
    <UProIcon
      v-if="item.icon"
      :name="item.icon"
      :filled="item.iconFilled"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import UProIcon from './UProIcon.vue'
type SocialsType = {
  label: string;
  href: string;
  icon: string;
  iconFilled: boolean;
};
const props = defineProps({
  socials: {
    type: Array as PropType<SocialsType[]>,
    required: true,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.AppSocialIcons {
  display: flex;
  color: #ada9a4;
  padding: 1rem;
  flex-direction: row;

  &:hover {
    color: #ecebe8;
  }
}
</style>
