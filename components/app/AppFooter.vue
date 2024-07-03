<script setup lang="ts">
const { config } = useDocus();
const socialIcons = ref(null);
const icons = computed(() => config.value?.footer?.iconLinks || []);
const textLinks = computed(() => config.value?.footer?.textLinks || []);
const socialIconsCount = computed(
  () => Object.entries(config.value?.socials || {}).filter(([, v]) => v).length
);
const nbSocialIcons = computed(() =>
  socialIcons.value ? socialIconsCount.value : 0
);
</script>

<template>
  <footer>
    <Container :fluid="config?.footer?.fluid" padded class="footer-container">
      <!-- Left -->
      <div class="left">
        <a
          v-if="config?.footer?.credits"
          :href="config?.footer?.credits?.href || '#'"
          rel="noopener"
          target="_blank"
        >
          <Icon
            v-if="config?.footer?.credits?.icon"
            :name="config?.footer?.credits?.icon"
            class="left-icon"
          />
          <p v-if="config?.footer?.credits?.text">
            {{ config.footer.credits.text }}
          </p>
        </a>
      </div>

      <!-- Center -->
      <div class="center">
        <NuxtLink
          v-for="link in textLinks"
          :key="link.href"
          class="text-link"
          :aria-label="link.text"
          :href="link.href"
          :target="link?.target || '_self'"
          :rel="link?.rel || 'noopener noreferrer'"
        >
          {{ link.text }}
        </NuxtLink>
      </div>

      <!-- Right -->
      <div class="right">
        <a
          v-for="icon in icons.slice(0, 6 - nbSocialIcons)"
          :key="icon.label"
          class="icon-link"
          :aria-label="icon.label"
          :href="icon.href"
          target="_blank"
          :rel="icon?.rel || 'noopener noreferrer'"
        >
          <Icon :name="icon.icon" />
        </a>
        <AppSocialIcons ref="socialIcons" />
      </div>
    </Container>
  </footer>
</template>

<style lang="ts" scoped>
css({
  footer: {
    display: 'flex',
    minHeight: '{docus.footer.height}',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '{elements.border.primary.static}',
    padding: '{docus.footer.padding}',

    '.footer-container': {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      justifyItems: 'center',
      gap: '{huyooo.space.2}',
      '@sm': {
        justifyItems: 'legacy',

      },

      ':deep(.icon)': {
        width: '{huyooo.space.4}',
        height: '{huyooo.space.4}'
      },

      a: {
        color: '{huyooo.color.gray.500}',
        '@dark': {
          color: '{huyooo.color.gray.400}'
        },
        '&:hover': {
          color: '{huyooo.color.gray.700}',
          '@dark': {
            color: '{huyooo.color.gray.200}',
          }
        },
      },

      '.left': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        py: '{huyooo.space.4}',
        order: 1,

        '@sm': {
          gridColumn: 'span 3 / span 3',
          order: 0,
        },

        a: {
          display: 'flex',
          alignItems: 'center',
        },

        p: {
          fontSize: '{huyooo.text.xs.fontSize}',
          lineHeight: '{huyooo.text.xs.lineHeight}',
          fontWeight: '{huyooo.fontWeight.medium}'
        },

        '&-icon': {
          flexShrink: 0,
          width: '{huyooo.space.4}',
          height: '{huyooo.space.4}',
          fill: 'currentcolor',
          marginRight: '{huyooo.space.2}',
        },
      },

      '.center': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '@sm': {
          gridColumn: 'span 6 / span 6',
          flexDirection: 'row',
          justifyContent: 'center',
        },

        '.text-link': {
          padding: '{huyooo.space.2}',
          fontSize: '{huyooo.text.sm.fontSize}',
          lineHeight: '{huyooo.text.sm.lineHeight}',
          fontWeight: '{huyooo.fontWeight.medium}'
        }

      },

      '.right': {
        gridColumn: 'span 12 / span 12',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // marginLeft: 'calc(0px - {huyooo.space.4})',

        '@sm': {
          gridColumn: 'span 3 / span 3',
          marginRight: 'calc(0px - {huyooo.space.4})',
        },

        '.icon-link': {
          display: 'flex',
          padding: '{huyooo.space.4}'
        }
      },
    },
  }
})
</style>
