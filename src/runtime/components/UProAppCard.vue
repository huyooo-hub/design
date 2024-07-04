<template>
  <ul class="custom-grid">
    <li v-for="(item, index) in props.list" :key="index">
      <NuxtLink class="custom-card" :to="item.detailsLink">
        <div class="custom-body">
          <div class="custom-header">
            <img :src="item.icon" alt="" class="custom-icon" />
          </div>
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">
            <p>{{ item.subtitle }}</p>
          </div>
        </div>

        <div class="custom-footer">
          <div class="custom-footer-info">
            <div class="custom-like">
              <Icon name="icon-park-outline:like" class="icon" />
              <span class="custom-text">{{ item.like }}</span>
            </div>
            <div class="custom-pv">
              <Icon name="material-symbols:menu-book-outline" class="icon" />
              <span class="custom-text">{{ item.pv }}</span>
            </div>
          </div>
          <div class="custom-link" @click="toLink(item.link)">
            <Icon name="quill:arrow-right" class="icon" />
            <span class="custom-text">跳转</span>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
const props = defineProps({
  list: {
    type: Array as PropType<any>,
    default: () => [],
  },
});
function toLink(url: string) {
  window.open(url);
}
</script>

<style scoped lang="less">
.custom-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}
.custom-card {
  border: 1px solid rgba(226, 232, 240, 0.1);
  border-radius: 8px;

  transition: border-color 0.2s ease-in-out;
  background-color: rgba(39, 39, 42, 0.8);
  display: flex;
  flex-direction: column;
  .custom-body {
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    .title {
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      margin-top: 10px;
    }
    .subtitle {
      color: rgb(236, 235, 232);
      font-size: 15px;
      font-weight: 400;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      min-height: 40px;
    }
  }
}
.custom-card:hover {
  border-color: #34d399;
}

.custom-icon {
  height: 48px;
  width: auto;
}

.custom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(148, 163, 184);
  // background-color: rgba(30, 41, 59, 0.5);
  height: 45px;
  padding: 0px 10px 0px 10px;
}

.custom-footer-info {
  display: flex;
  align-items: center;
  flex: 1;
}
.custom-like,
.custom-pv {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
}
.custom-text {
  font-size: 14px;
}
.custom-link {
  display: flex;
  align-items: center;
  color: #00dc82;
  cursor: pointer;
}
.icon {
  margin-right: 3px;
}
</style>
