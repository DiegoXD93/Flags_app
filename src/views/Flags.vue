<template>
  <div>
    <flag-card
      v-for="flag in flags"
      :key="flag.name"
      :cod="flag.alpha3Code"
      :name="flag.name"
      :population="flag.population"
      :capital="flag.capital"
      :region="flag.region"
      :imgUri="flag.flag"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import FlagCard from "@/components/FlagCard";
import { useFlagQuery } from "@/composable/useFlagQuery";

export default {
  components: { FlagCard },
  setup() {
    const flags = useFlagQuery("/all");
    return { flags };
  },
};
</script>

<style lang="scss" scoped>
div {
  @apply grid grid-cols-1 gap-8  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>