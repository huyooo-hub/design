<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  }
})
</script>

<template>
  <section class="card-grid">
    <ContentSlot :use="$slots.root" />

    <h2 class="title">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>
    <div class="layout">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="less">
.card-grid {
  position: relative;
  padding-bottom: 8rem;

  .title {
    margin-bottom: 2rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: #fafafa;
  }

  .layout {
    display: grid;
    gap: 1rem;
    text-align: start;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
