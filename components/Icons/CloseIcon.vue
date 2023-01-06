<template>
  <svg
    v-if="size === 'small'"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="15.7578"
      y="5.75781"
      width="14"
      height="2"
      rx="0.5"
      transform="rotate(135 15.7578 5.75781)"
      :fill="color"
    />
    <rect
      x="14.3428"
      y="15.6572"
      width="14"
      height="2"
      rx="0.5"
      transform="rotate(-135 14.3428 15.6572)"
      :fill="color"
    />
  </svg>

  <svg
    v-else-if="size === 'medium'"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="23.6367"
      y="8.63672"
      width="21"
      height="3"
      rx="0.63"
      transform="rotate(135 23.6367 8.63672)"
      :fill="color"
    />
    <rect
      x="21.5137"
      y="23.4863"
      width="21"
      height="3"
      rx="0.63"
      transform="rotate(-135 21.5137 23.4863)"
      :fill="color"
    />
  </svg>

  <svg
    v-else
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="31.5156"
      y="11.5156"
      width="28"
      height="4"
      rx="1"
      transform="rotate(135 31.5156 11.5156)"
      :fill="color"
    />
    <rect
      x="28.6846"
      y="31.3154"
      width="28"
      height="4"
      rx="1"
      transform="rotate(-135 28.6846 31.3154)"
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
      default: 'medium',
    },
    color: {
      type: String,
      default: Colors.blackBold,
    },
  },
};
</script>