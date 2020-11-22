<template>
  <div class="page" :class="mode">
    <app-bar />
    <main>
      <div>
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import { provide, ref, watchEffect } from "vue";
import { useDarkMode } from "@/composable/useDarkMode";
import AppBar from "@/components/AppBar";

export default {
  components: {
    AppBar,
  },
  setup() {
    const darkMode = useDarkMode();
    const apiUrl = "https://restcountries.eu/rest/v2";
    provide("apiUrl", apiUrl);
    provide("toogleMode", darkMode.toogleMode);

    return darkMode;
  },
};
</script>

<style lang="scss" scoped>
.page {
  @apply min-h-screen flex flex-col;
}
main {
  @apply px-4 py-8 lg:px-16 flex-grow bg-gray-100 dark:bg-gray-800 dark:text-white;
  & div {
    @apply container mx-auto;
    @media (min-width: 1440px) {
      max-width: 1440px;
    }
  }
}
</style>
