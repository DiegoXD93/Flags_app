import { ref, watchEffect } from "vue";

export function useFlagQuery(url) {
  console.log("flag");
  const apiUrl = "https://restcountries.eu/rest/v2";

  const response = ref([]);
  watchEffect(() => {
    fetch(`${apiUrl}${url}`)
      .then((res) => res.json())
      .then((data) => (response.value = data));
  });
  return response;
}
