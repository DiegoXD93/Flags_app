import { ref } from "vue";

export function useDarkMode() {
  let mode = ref("");
  const toogleMode = () =>
    mode.value === "" ? (mode.value = "dark") : (mode.value = "");
  return { mode, toogleMode };
}
