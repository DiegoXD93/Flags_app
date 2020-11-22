<template>
  <article>
    <img :src="flag.flag" :alt="flag.name" />
    <div>
      <h5>{{ flag.name }}</h5>
      <section>
        <p><span>Native Name: </span>{{ flag.nativeName }}</p>
        <p><span>Population: </span>{{ flag.population }}</p>
        <p><span>Region: </span>{{ flag.region }}</p>
        <p><span>Sub Region: </span>{{ flag.subregion }}</p>
        <p><span>Capital: </span>{{ flag.capital }}</p>
      </section>
      <section>
        <p><span>Top Level Domain: </span>{{ flag.topLevelDomain }}</p>
        <p>
          <span>Currencies: </span>
          <template v-for="(item, id) in flag.currencies" :key="id">
            {{ item.name }}
          </template>
        </p>
        <p>
          <span>Languages: </span>
          <template v-for="(item, id) in flag.languages" :key="id">
            {{ `${item.name} ` }}
          </template>
        </p>
      </section>
      <section>
        <h6>Border Countries:</h6>
        <div>
          <button v-for="item in flag.borders" :key="item">
            {{ item }}
          </button>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import { computed, inject, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useFlagQuery } from "@/composable/useFlagQuery";

export default {
  setup() {
    const { params } = useRoute();

    const flag = useFlagQuery(`/alpha/${params.cod}`);

    return { flag };
  },
};
</script>

<style lang="scss" scoped>
article {
  @apply m-4 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 md:gap-12 lg:gap-28;
  & > div {
    @apply grid gap-8 my-auto lg:grid-cols-2;
    & h5 {
      @apply text-xl font-bold lg:col-span-2;
    }
    & section {
      @apply space-y-3;
      & p {
        @apply text-sm font-light;
        & span {
          @apply font-semibold;
        }
      }
      &:nth-of-type(3) {
        @apply lg:space-y-0 lg:space-x-4 lg:col-span-2 lg:flex;
        & div {
          @apply lg:flex-grow gap-2 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4;
          & button {
            @apply bg-white dark:bg-gray-700;
          }
        }
      }
    }
  }
}
</style>