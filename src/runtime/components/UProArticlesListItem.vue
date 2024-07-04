<template>
  <article
    v-if="props.article._path && props.article.title"
    :class="{ featured: props.featured }"
    @click="linkTo(props.article._path)"
  >
    <div class="image">
      <NuxtImg
        v-if="props.article.cover"
        :src="props.article.cover"
        :alt="props.article.title"
      />
    </div>

    <div class="content">
      <div class="headline">
        <h1>
          {{ props.article.title }}
        </h1>
      </div>

      <p class="description">
        {{ props.article.description }}
      </p>
      <time>
        {{ formatDate(props.article.date) }}
      </time>
    </div>
  </article>
</template>
<script setup lang="ts">
import { formatDate } from "../utils/index";
import { useRouter } from "#app";

type Article = {
  _path: string;
  cover: string;
  author: {
    name: string;
    avatarUrl: string;
    link: string;
  };
  title: string;
  date: string;
  description: string;
};
const router = useRouter();
const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
      if (value?._path && value.title) {
        return true;
      }
      return false;
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
function linkTo(path: string) {
  console.log(path, "pathpathpath");
  router.push({
    path: path,
  });
}
</script>

<style scoped lang="less">
article {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &.featured {
    flex-direction: row;
    gap: 2rem;
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .image {
    flex: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;

    .headline {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      -webkit-line-clamp: 2; /* For compatibility */
      line-clamp: 2;

      &.featured {
        font-size: 4rem;
        -webkit-line-clamp: 3; /* For compatibility */
        line-clamp: 3;
      }
    }

    .description {
      margin-bottom: 1rem;
      -webkit-line-clamp: 2; /* For compatibility */
      line-clamp: 2;

      &.featured {
        -webkit-line-clamp: 4; /* For compatibility */
        line-clamp: 4;
      }
    }

    time {
      font-size: 0.875rem;
      color: #97948f;
    }
  }
}
</style>
