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
    <div class="custom-button">
      <UProIcon v-if="icon" :name="icon" />
      <ContentSlot :use="$slots.default" unwrap="p ul li" />
    </div>
  </NuxtLink>
</template>

<style scoped lang="less">
.custom-button {
  color: rgba(0, 0, 0, 0.65);
  background-color: rgb(0, 220, 130, 1);
  font-weight: 500;
  border-radius: 6px;
  font-size: 14px;
  padding: 10px 20px;
  text-align: center;
  outline: none;
  transition: background 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
}

.custom-button:hover {
  background-color: rgb(0, 193, 106);
}
</style>
