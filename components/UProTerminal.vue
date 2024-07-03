<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  content: {
    type: [Array, String] as PropType<string[] | string>,
    required: true
  }
})

const { copy: copyToClipboard } = useClipboard()

const state = ref('init')

const lines = computed(() => {
  if (typeof props.content === 'string') {
    return [props.content]
  }
  return props.content
})

const copy = () => {
  copyToClipboard(lines.value.join('\n'))
    .then(() => {
      state.value = 'copied'

      setTimeout(() => {
        state.value = 'init'
      }, 1000)
    })
    .catch(() => {
      console.warn('Couldn\'t copy to clipboard!')
    })
}
</script>

<template>
  <div class="terminal" @click="copy">
    <div v-if="state === 'copied'" class="copied">
      <div class="scrim" />
      <div class="content">
        Copied!
      </div>
    </div>
    <div class="header">
      <div class="controls">
        <div />
        <div />
        <div />
      </div>
      <div class="title">
        Bash
      </div>
    </div>
    <div class="window">
      <span v-for="line in lines" :key="line" class="line">
        <span class="sign">$</span>
        <span class="content">{{ line }}</span>
      </span>
    </div>
    <div v-if="state !== 'copied'" class="prompt">
      Click to copy
    </div>
  </div>
</template>

<style scoped lang="less">
.terminal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 16rem;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid #1c1b19;
  border-radius: 14px;
  background: #121110;
  .copied {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .scrim {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #1c1b19;
      opacity: 0.75;
    }
    .content {
      z-index: 10;
      font-weight: 600;
      color: #f3f3f2;
      font-size: 1.125rem;
    }
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1c1b19;
    width: 100%;
    height: 3rem;
    .controls {
      display: flex;
      margin-left: 1rem;
      div {
        &:nth-child(1) {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          background: #ff7353;
        }
        &:nth-child(2) {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          background: #ffdc4e;
          margin-left: 0.5rem;
        }
        &:nth-child(3) {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          background: #3ceea5;
          margin-left: 0.5rem;
        }
      }
    }
    .title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        'Liberation Mono', 'Courier New';
    }
  }
  .window {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    padding: 1rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New';
    font-size: 0.875rem;
    .line {
      display: flex;
      margin-bottom: 0.25rem;
    }
    .sign {
      margin-right: 0.5rem;
      display: inline-block;
      user-select: none;
      font-weight: 700;
    }
    .content {
      display: inline-block;
    }
  }
  .prompt {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
    text-align: center;
    opacity: 0;
  }
  &:hover {
    .prompt {
      opacity: 1;
    }
  }
}
</style>
