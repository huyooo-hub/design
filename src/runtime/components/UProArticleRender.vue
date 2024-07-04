<template>
  <div>
    <ContentRenderer
      :key="doc.updatedAt"
      class="content"
      :value="doc"
      v-if="loading"
    >
      <template #empty>
        <div class="p-8">
          <UProAlert type="warning">
            <p class="font-semibold">Content is empty!</p>
            <br /><br />
            <p>
              Type any
              <span class="font-semibold">Markdown</span> or
              <span class="font-semibold">MDC code</span>
              in editor to see it replaced by rendered nodes in this panel.
            </p>
          </UProAlert>
        </div>
      </template>
    </ContentRenderer>
    <div v-else class="loading">
      <UProAlert type="primary">
        <span>Editor is loading...</span>
        <Icon name="file-icons:sandbox" class="ml-2 inline" />
      </UProAlert>
    </div>
  </div>
</template>
<script setup>
import { transformContent } from "@nuxt/content/transformers";
import { articles } from "../common/articlesOptions";
const INITIAL_CODE = `---
title: MDC
---

# {{ $doc.title}}

MDC stands for _**M**ark**D**own **C**omponents_.

This syntax supercharges regular Markdown to write documents interacting deeply with any Vue component from your \`components/content/\` directory or provided by a module.

## Next steps

- [Install Nuxt Content](/get-started)
- [Explore the MDC syntax](/guide/writing/mdc)

::UProCodeGroup
  \`\`\`markdown [Source]
  ::UProAlert{type="success"}
    Hooray!
  ::
  \`\`\`

  ::UProCodeBlock{label="Preview"}
    ::UProAlert{type="success"}
      Hooray!
    ::
  ::
::
`;
const route = useRoute();
const content = ref("");
const loading = ref(true);
const pathId = ref(route.query.id);
getContent();
const { data: doc, refresh } = await useAsyncData(
  "playground-" + content.value,
  async () => {
    try {
      const parsed = await transformContent("content:index.md", content.value);
      return parsed;
    } catch (e) {
      return doc.value;
    }
  }
);

function getContent() {
  articles.map((item) => {
    console.log(item.path, pathId.value, "pathId");
    if (item.path == pathId.value) {
      content.value = item.article;
    }
  });
}
watch(pathId, () => {
  getContent();
  refresh();
});
</script>
