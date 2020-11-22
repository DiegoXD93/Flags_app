<template>
  <article @click="push(`/${cod}`)">
    <img :src="imgUri" :alt="name" />
    <section>
      <h6>{{ name }}</h6>
      <p><span>Population: </span>{{ population }}</p>
      <p><span>Region: </span>{{ region }}</p>
      <p><span>Capital: </span>{{ capital }}</p>
    </section>
  </article>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "flag-card",
  props: {
    imgUri: { type: String, default: "" },
    cod: { type: String, default: "" },
    name: { type: String, default: "" },
    population: { type: Number, default: "" },
    region: { type: String, default: "" },
    capital: { type: String, default: "" },
  },
  setup() {
    const { push } = useRouter();
    return { push };
  },
};
</script>

<style lang="scss" scoped>
article {
  @apply m-4 overflow-hidden bg-white rounded-md dark:bg-gray-700 cursor-pointer;
  img {
    @apply object-cover w-full h-40;
  }
  section {
    @apply p-6;
    h6 {
      @apply font-bold mb-4;
    }
    p {
      @apply text-sm font-light;
      span {
        @apply font-semibold;
      }
    }
  }
}
</style>