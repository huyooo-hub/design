<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="featured">
      <UProArticlesListItem :article="articles[1]" :featured="true" />
    </div>
    <div class="layout">
      <UProArticlesListItem
        v-for="(article, index) in articles.slice(2)"
        :key="index"
        :article="article"
      />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">
        creating
      </ProseA>
      one in the
      <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { withoutTrailingSlash } from "ufo";
import UProArticlesListItem from "./UProArticlesListItem.vue";
import { queryContent } from "#imports";
const route = useRoute();
const routePath = withoutTrailingSlash(route.path);
const articles = await queryContent<any>(routePath)
  .where({ _extension: "md" })
  .without(["body", "excerpt"])
  .sort({ date: -1 })
  .find();
console.log(articles, "articles11");
</script>

<style scoped lang="less">
.articles-list {
  .featured {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .layout {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 3rem;
  }
}

.tour {
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
