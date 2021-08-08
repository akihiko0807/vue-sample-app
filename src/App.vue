<template>
  <div class="Site">
    <AppHeader />
    <main class="Main">
      <AppHero />
      <rooter-view />
    </main>
    <AppFooter />
  </div>
  <div id="nav">
    <router-link to="/">Top</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/author">Author</router-link> |
    <router-link to="/production-note">ProductionNote</router-link> |
    <router-link to="/faq">Faq</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
</style>
