<template>
  <UProContainer
    class="docs-page-content"
    :class="{
      'has-toc': hasToc,
      'has-aside': hasAside,
    }"
  >
    <!-- Aside -->
    <aside v-if="hasAside" class="aside-nav">
      <UProAside
        class="app-aside"
        :navigation="currentPageNavigation?.children"
      />
    </aside>

    <!-- Page Body -->
    <article class="page-body-doc" v-if="props.hasBody">
      <slot />
      <UProContentSurround :surround="surround" style="margin-top: 20px" />
    </article>

    <!-- TOC -->
    <div v-if="hasToc" class="toc">
      <UProToc :links="links" />
    </div>
  </UProContainer>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import UProContainer from "./UProContainer.vue";
import UProContentSurround from "./UProContentSurround.vue";
import UProAside from "./UProAside.vue";
import UProToc from "./UProToc.vue";
import {
  computed,
  fetchContentNavigation,
  queryContent,
  useAsyncData,
  useContentHelpers,
} from "#imports";
import { parsePath } from "../utils";
const props = defineProps({
  hasBody: {
    required: true,
    type: Boolean,
    default: () => true,
  },
  hasToc: {
    required: true,
    type: Boolean,
    default: () => true,
  },
  hasAside: {
    required: true,
    type: Boolean,
    default: () => true,
  },
});

const route = useRoute();
const emit = defineEmits(["move"]);
const { data: page } = await useAsyncData(`${route.path}-page`, () =>
  queryContent(route.path).findOne()
);
console.log(page.value, "articlearticle1");
const links = computed(() => {
  if (page.value) {
    return page.value.body?.toc?.links;
  } else {
    return [];
  }
});
const { navPageFromPath } = useContentHelpers();
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

//获取文档目录
let firstPath = "/" + parsePath(route.path).slice(0, 1).join("/");
console.log(firstPath, "firstPath");
const currentPageNavigation = navPageFromPath(
  firstPath,
  navigation.value || []
);
if (currentPageNavigation) {
}
const routePath = computed(() => {
  return route.path;
});
//

console.log(currentPageNavigation, "currentPageNavigation");

// findSurround：查找当前内容的前后内容。
const { data: surround } = await useAsyncData(`${routePath}-surround`, () =>
  queryContent(firstPath)
    .where({ _extension: "md" })
    .without(["body", "excerpt"])
    .sort({ date: -1 })
    .findSurround(routePath.value)
);
console.log(surround.value, "surround");
</script>

<style scoped lang="less">
.docs-page-content {
  position: relative;
  display: grid;
  flex-direction: column-reverse;
  gap: 2rem;
  &.has-toc {
    grid-template-columns: minmax(320px, 1fr) minmax(250px, 250px);
  }
  &.has-aside {
    grid-template-columns: minmax(250px, 250px) minmax(320px, 1fr);
  }
  &.has-aside.has-toc {
    grid-template-columns: minmax(250px, 250px) minmax(320px, 1fr) minmax(
        250px,
        250px
      );
  }
}

.aside-nav {
  overflow-y: auto;
  display: block;
  position: sticky;
  top: 64px;
  align-self: flex-start;
  height: calc(100vh - 64px);
  padding: 2rem;
  padding-right: 2rem;
}

.page-body-doc {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 2rem;
  width: 100%;
  margin-top: 0;
  &:deep(h1:not(.not-prose):first-child) {
    margin-top: 0;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  &:deep(h1:not(.not-prose)first-child + p) {
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #121110;
    color: #ada9a4;
    a {
      color: #ecebe8;
      &:hover {
        border-color: #36332e;
      }
    }
  }
  .docs-prev-next {
    margin-top: 1rem;
  }
}

.toc {
  position: sticky;
  top: 64px;
  display: flex;
  overflow: auto;
  align-self: flex-start;
  padding: 2rem;
  height: calc(100vh - 64px);
  max-height: none;
  border-bottom: none;
  .tocWrapper {
    width: 100%;
    height: 100%;
    background-color: transparent;
    backdrop-filter: none;
    button {
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 1rem;
      .title {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        margin-right: 0.25rem;
      }
      .icon {
        width: 1rem;
        height: 1rem;
        transition: transform 100ms;
        &.rotate {
          transform: rotate(90deg);
        }
      }
    }
    .docs-toc-wrapper {
      display: block;
      margin-bottom: 1rem;
      &.opened {
        display: block;
        padding: 0;
        max-height: none;
        overflow: auto;
      }
    }
  }
}
</style>
