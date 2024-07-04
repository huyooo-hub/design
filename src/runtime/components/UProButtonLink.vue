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
    <button class="custom-button">
      <Icon v-if="icon" :name="icon" />
      <ContentSlot :use="$slots.default" unwrap="p ul li" />
    </button>
  </NuxtLink>
</template>

<style scoped lang="less">
.custom-button {
  color: #ffffff; /* text-white */
  background-color: rgb(0, 220, 130);
  font-weight: 500;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
  text-align: center;
  outline: none;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.custom-button:hover {
  background: rgb(0, 193, 106);
}

.custom-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.5);
}

.custom-button:focus.dark {
  box-shadow: 0 0 0 0.25rem rgba(37, 99, 235, 0.5);
}
</style>
