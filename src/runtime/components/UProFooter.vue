<template>
  <footer>
    <UProContainer class="footer-container">
      <!-- Left -->
      <div class="left">
        <a
          v-if="props.credits"
          :href="props.credits.href || '#'"
          rel="noopener"
          target="_blank"
        >
          <UProIcon
            :name="props.credits.icon"
            :filled="props.credits.iconFilled"
            v-if="props.credits.icon"
            class="left-icon"
          ></UProIcon>
          <p v-if="props.credits.label">
            {{ props.credits.label }}
          </p>
        </a>
      </div>

      <!-- Center -->
      <div class="center">
        <NuxtLink
          v-for="link in props.textLinks"
          :key="link.href"
          class="text-link"
          :aria-label="link.label"
          :href="link.href"
          target="_self"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <div class="right">
        <UProSocialIcons :socials="iconLinks" />
      </div>
    </UProContainer>
  </footer>
</template>
<script setup lang="ts">
import type { PropType } from "vue";
import UProContainer from "./UProContainer.vue";
import UProIcon from "./UProIcon.vue";
import UProSocialIcons from "./UProSocialIcons.vue";
type CreditsType = {
  icon: string;
  label: string;
  href: string;
  iconFilled: boolean;
};
let props = defineProps({
  iconLinks: {
    type: Array as PropType<CreditsType[]>,
    required: true,
    default: () => [],
  },
  textLinks: {
    type: Array as PropType<CreditsType[]>,
    required: true,
    default: () => [],
  },
  credits: {
    type: Object as PropType<CreditsType>,
    required: true,
    default: () => {
      return {
        icon: "logo",
        label: "©2023 GPT Gooo 京ICP 11010802020088 号",
        href: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088",
      };
    },
  },
});
</script>

<style scoped lang="less">
footer {
  display: flex;
  min-height: 100px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #121110;
  padding: 1rem 0;

  .footer-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 0.5rem;

    a {
      color: #ada9a4;
      &:hover {
        color: #ecebe8;
      }
    }

    .left {
      grid-column: span 3 / span 3;
      display: flex;
      padding: 1rem 0;
      order: 0;
      a {
        display: flex;
        align-items: center;
      }
      p {
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 500;
      }
      &-icon {
        flex-shrink: 0;
        width: 1rem;
        height: 1rem;
        fill: currentColor;
        margin-right: 0.5rem;
      }
    }

    .center {
      grid-column: span 6 / span 6;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .text-link {
        padding: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
      }
    }

    .right {
      grid-column: span 3 / span 3;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: calc(0px - 1rem);

      .icon-link {
        display: flex;
        padding: 1rem;
      }
    }
  }
}
</style>
