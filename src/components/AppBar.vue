<template>
  <header>
    <nav>
      <span>Where in the world?</span>
      <span>
        <input type="checkbox" @change="toogleMode" />

        Dark Mode
      </span>
    </nav>
  </header>
</template>

<script>
import { inject } from "vue";

export default {
  name: "app-bar",
  setup() {
    const toogleMode = inject("toogleMode");
    return { toogleMode };
  },
};
</script>

<style lang="scss" scoped>
header {
  @apply px-4 py-8 lg:px-20  bg-white dark:bg-gray-700 dark:text-white;
}
nav {
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
  @apply container mx-auto flex justify-between;
  span {
    @apply font-semibold lg:font-bold;
    &:nth-child(1) {
      @apply lg:text-2xl;
    }
    &:nth-child(2) {
      @apply text-sm lg:text-base;
    }
  }
}
</style>