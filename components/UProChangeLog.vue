<template>
  <div>
    <GithubReleases v-slot="{ releases }">
      <div v-for="release in releases" :key="release.name" class="release">
        <div class="release-name">
          <h2 class="">
            {{ release.name }}
          </h2>
        </div>
        <div class="content">
          <h3 class="sr-only">
            Description
          </h3>

          <ContentRenderer :value="release">
            <template #empty>
              <p>No description provided</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
    </GithubReleases>
  </div>
</template>

<style scoped lang="less">
.release {
  position: relative;
  display: flex;
  overflow: hidden;
  flex: 1;
  padding: 1rem 2rem;
  padding-bottom: 2rem;
  overflow-y: auto;

  .release-name {
    position: relative;
    padding-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f6f5f4;
      margin-top: 2rem;
    }
  }

  .content {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 6rem;
  }
}
</style>
