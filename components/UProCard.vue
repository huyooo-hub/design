<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card">
    <Icon v-if="icon" :name="icon" />
    <slot />
    <div>
      <h3 class="title">
        <ContentSlot :use="$slots.title" unwrap="p">
          Card title
        </ContentSlot>
      </h3>
      <p class="description">
        <ContentSlot :use="$slots.description" unwrap="p">
          Card description
        </ContentSlot>
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.card {
  display: block;
  position: relative;
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid #18181b;
  background: #0c0d0ccc;
  backdrop-filter: saturate(200%) blur(20px);

  .icon {
    display: inline-block;
    margin-bottom: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }

  .title {
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: #fafafa;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 500;
    color: #a1a1aa;
  }
}
</style>
