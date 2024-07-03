<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator (value: string) {
      return ['info', 'success', 'warning', 'danger', 'primary'].includes(
        value
      )
    }
  }
})
</script>

<template>
  <div class="alert" :class="[props.type]">
    <div class="alert-content">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<style scoped lang="less">
.alert {
  margin: 2rem 0;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 1px solid;

  &.info {
    background-color: #00131d;
    border-color: #002235;
    color: #64c7ff;
  }

  &.success {
    background-color: #00190f;
    border-color: #002817;
    color: #3ceea5;
  }

  &.warning {
    background-color: #1b1500;
    border-color: #292100;
    color: #ffdc4e;
  }

  &.danger {
    background-color: #1c0301;
    border-color: #340a01;
    color: #ffa692;
  }
}
</style>
