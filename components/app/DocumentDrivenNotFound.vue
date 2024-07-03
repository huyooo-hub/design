<template>
  <div class="document-driven-not-found not-prose">
    <main>
      <p>404</p>
      <div class="content">
        <div class="text-section">
          <h1>Not Found</h1>
          <p>This is not the page you're looking for.</p>
        </div>

        <div class="button-section">
          <ButtonLink href="/" size="large" variant="primary">
            Go back home
          </ButtonLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="ts">
css({
  '.document-driven-not-found': {
    display: 'flex',
    flex: '1',
    px: '{huyooo.space.4}',
    py: '{huyooo.space.16}',
    '@sm': {
      px: '{huyooo.space.6}',
      py: '{huyooo.space.24}',
    },

    '@md': {
      display: 'grid',
      placeItems: 'center',
    },

    '@lg': {
      px: '{huyooo.space.8}',
    },

    main: {
      mx: 'auto',
      maxWidth: '{huyooo.sizefull}',

      '@sm': {
        display: 'flex',
        gap: '{huyooo.space.6}'
      },

      // 404
      '& > p': {
        fontSize: '{huyooo.fontSize.4xl}',
        fontWeight: '{huyooo.fontWeight.bold}',
        lineHeight: '{huyooo.lead.tight}',
        color: '{huyooo.color.primary.500}',
        '@sm': {
          fontSize: '{huyooo.fontSize.5xl}',
        }
      },

      '.content': {
        '.text-section': {
          borderColor: '{huyooo.color.gray.200}',
          borderLeftStyle: 'solid',
          borderLeftWidth: '1px',
          border: 'none',

          '@dark': {
            borderColor: '{huyooo.color.gray.800}',
          },

          '@sm': {
            borderColor: '{huyooo.color.gray.200}',
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            paddingLeft: '{huyooo.space.6}'
          },

          h1: {
            fontSize: '{huyooo.fontSize.4xl}',
            fontWeight: '{huyooo.fontWeight.extrabold}',
            letterSpacing: '{huyooo.letterSpacing.tight}',
            color: '{huyooo.color.gray.900}',
            '@dark': {
              color: '{huyooo.color.gray.200}',
            },
            '@sm': {
              fontSize: '{huyooo.fontSize.5xl}',
            },
          },

          p: {
            marginTop: '{huyooo.space.1}',
            fontSize: '{huyooo.fontSize.xl}',
            color: '{huyooo.color.gray.700}',
            '@dark': {
              color: '{huyooo.color.gray.400}',
            },
          }
        },

        // Button section
        '.button-section': {
          marginTop: '{huyooo.space.10}',
          flex: 'none',
          gap: '{huyooo.space.3}'
        }
      }
    }
  }
})
</style>
