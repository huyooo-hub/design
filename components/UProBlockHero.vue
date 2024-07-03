<template>
  <section class="block-hero">
    <div class="layout">
      <div class="content">
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>

        <h1 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Hero Title
          </ContentSlot>
        </h1>

        <p class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero default description.
          </ContentSlot>
        </p>

        <div v-if="$slots.extra" class="extra">
          <ContentSlot :use="$slots.extra" unwrap="p" />
        </div>

        <div class="actions">
          <ContentSlot v-if="$slots.actions" :use="$slots.actions" unwrap="p" />
          <template v-else>
            <UProButtonLink
              v-if="cta"
              class="cta"
              bold
              size="medium"
              :href="(cta[1] as any)"
            >
              {{ cta[0] }}
            </UProButtonLink>
            <a v-if="secondary" :href="(secondary[1] as any)" class="secondary">
              {{ secondary[0] }}
            </a>
          </template>
        </div>
      </div>

      <div class="support">
        <slot name="support">
          <UProVideoPlayer v-if="video" :src="video" />
          <!-- <UProTerminal v-if="snippet" :content="snippet" />
          <UProVideoPlayer v-else-if="video" :src="video" /> -->
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import UProButtonLink from './UProButtonLink.vue'
defineProps({
  cta: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  secondary: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  video: {
    type: String,
    required: false,
    default: ''
  },
  snippet: {
    type: [Array, String] as PropType<string[] | string>,
    required: false,
    default: ''
  }
})
</script>

<style scoped lang="less">
.block-hero {
  padding: 8rem 0;

  .layout {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .content {
    grid-column: span 2 / span 2;

    .announce {
      margin-bottom: 0.5rem;
      text-align: start;
    }

    .title {
      color: #fafafa;
      font-weight: 700;
      letter-spacing: 700;
      text-align: start;
      font-size: 3.75rem;
      line-height: 1;
      margin-bottom: 2rem;
      padding-left: 0;
      padding-right: 0;
    }

    .description {
      margin-bottom: 3rem;
      font-size: 1.125rem;
      line-height: 1.75rem;
      text-align: start;
      color: #a1a1aa;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .extra {
      margin-bottom: 4rem;
      display: flex;
      justify-content: flex-start;
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1rem;

      .cta {
        margin-bottom: 0;
      }

      .secondary {
        font-weight: 500;
        color: #a1a1aa;

        &:hover {
          color: #e4e4e7;
        }
      }
    }
  }
}
</style>
