<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div class="app">
    <Html lang="en" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="scss">
body {
  background: #ccc;
}
</style>
