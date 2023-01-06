<template>
  <svg
    v-if="size === 'large'"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2.20117" y="13.999" width="28" height="4" rx="1" :fill="color" />
    <rect
      x="18.2031"
      y="2"
      width="28"
      height="4"
      rx="1"
      transform="rotate(90 18.2031 2)"
      :fill="color"
    />
  </svg>
  <svg
    v-else-if="size === 'medium'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.65039"
      y="10.499"
      width="21"
      height="3"
      rx="0.75"
      :fill="color"
    />
    <rect
      x="13.6514"
      y="1.5"
      width="21"
      height="3"
      rx="0.75"
      transform="rotate(90 13.6514 1.5)"
      :fill="color"
    />
  </svg>
  <svg
    v-else
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1.10059" y="7" width="14" height="2" rx="0.5" :fill="color" />
    <rect
      x="9.10059"
      y="1"
      width="14"
      height="2"
      rx="0.5"
      transform="rotate(90 9.10059 1)"
      :fill="color"
    />
  </svg>
</template>
<script>
import { Colors } from "~/utils/Colors";
export default {
  props: {
    size: {
      type: String,
      default: "medium",
    },
    color: {
      type: String,
      default: Colors.blackBold,
    },
  },
};
</script>