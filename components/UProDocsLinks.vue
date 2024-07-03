<template>
  <div class="wrapper">
    <h4>Looking for v1 documentation ?</h4>
    <div class="links-wrapper">
      <button-link
        href="/v1/getting-started/introduction"
        :transparent="true"
        :color="undefined"
        size="large"
      >
        English
      </button-link>
      <button-link
        href="/fr/v1/getting-started/introduction"
        :transparent="true"
        :color="undefined"
        class="ml-2"
        size="large"
      >
        French
      </button-link>
      <button-link
        href="/ja/v1/getting-started/introduction"
        :transparent="true"
        :color="undefined"
        class="ml-2"
        size="large"
      >
        Japanese
      </button-link>
    </div>
    <UProEllipsis />
  </div>
</template>

<style scoped lang="less">
.wrapper {
  position: relative;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.links-wrapper {
  display: flex;
  gap: 2rem;
  justify-content: center;

  a {
    color: #ffffff;
  }
}
</style>
