<template>
  <div class="app-list">
    <div class="aside-nav">
      <FilterList :links="tree" class="mt-6" @select="select" />
    </div>
    <div class="page-body">
      <UProAppCard :list="appList"></UProAppCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import FilterList from "./UProFilterList.vue";
import UProAppCard from "./UProAppCard.vue";
import {
  gptOptions,
  promptsOptions,
  drawAIOptions,
  textAIoptions,
  imageAIoption,
  videoAIOptions,
  audioAIOptions,
  programmeAIoptions,
  busineseAIOptions,
  AI3DOptions,
  othersOptions,
} from "../common/appListOptions";
import { nextTick, ref } from "#imports";
const tree = ref([
  //   {
  //     title: '全部',
  //     value: 'all',
  //     icon: 'fad:logo-juce',
  //   },
  {
    title: "gpt",
    value: "gpt",
    icon: "charm:messages",
  },
  {
    title: "提示词助手",
    value: "prompts",
    icon: "material-symbols:help-rounded",
  },
  {
    title: "绘画AI",
    value: "drawAI",
    icon: "fad:midiplug",
  },

  {
    title: "文本AI",
    value: "textAI",
    icon: "fad:diskio",
  },

  {
    title: "图像AI",
    value: "imageAI",
    icon: "fad:softclip",
  },
  {
    title: "视频AI",
    value: "videoAI",
    icon: "fad:modularplug",
  },
  {
    title: "音频AI",
    value: "audioAI",
    icon: "fad:logo-audacity",
  },
  {
    title: "编程AI",
    value: "programmeAI",
    icon: "codicon:debug-console",
  },
  {
    title: "商业AI",
    value: "busineseAI",
    icon: "fad:waveform",
  },
  {
    title: "AI3D",
    value: "AI3D",
    icon: "fad:random-1dice",
  },
  {
    title: "其他AI",
    value: "others",
    icon: "fad:xlrplug",
  },
]);
const appList = ref<any[]>([]);
function select(value: string) {
  console.log(value, "value11");
  appList.value = [
    ...gptOptions,
    ...promptsOptions,
    ...drawAIOptions,
    ...textAIoptions,
    ...imageAIoption,
    ...videoAIOptions,
    ...audioAIOptions,
    ...programmeAIoptions,
    ...busineseAIOptions,
    ...AI3DOptions,
    ...othersOptions,
  ].filter((item) => {
    return item.type === value;
  });
  nextTick(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}
select("gpt");
</script>
<style scoped lang="less">
.app-list {
  display: flex;
  flex-direction: row;
}

.aside-nav {
  display: block;
  position: sticky;
  top: 64px;
  width: 250px;
  height: calc(100vh - 64px);
  overflow: auto;
}

.page-body {
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  overflow: auto;
}
</style>
