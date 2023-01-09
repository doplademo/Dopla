<template>
  <nav
    class="
      flex
      items-center
      justify-between
      px-3
      py-4
      rounded-md
      bg-mainBold
      fixed
      top-1
      left-1
      right-1
      z-10
    "
  >
    <nuxt-link to="/">
      <img
        class="w-28"
        src="~/assets/images/common/logo.png"
        alt="dopla logo"
      />
    </nuxt-link>

    <div v-if="isOnboarding"></div>

    <div v-else-if="isLogged" class="flex items-center gap-2">
      <nuxt-link to="/">
        <profile-icon :size="20" :color="Colors.white" />
      </nuxt-link>
      <nuxt-link to="/checkout">
        <basket-icon :size="20" :color="Colors.white" />
      </nuxt-link>
      <button><hamburger-icon :color="Colors.white" /></button>
    </div>

    <div v-else class="flex items-center gap-2">
      <nuxt-link class="text-white text-xs" to="/store">
        Log in
      </nuxt-link>
      <main-button
        to="/onboarding"
        text-class="text-xs"
        class="py-1 px-2"
        title="BEGIN"
      />
      <button><hamburger-icon :color="Colors.white" /></button>
    </div>
  </nav>
</template>

<script>
import MainButton from "../Button/MainButton.vue";
import HamburgerIcon from "../Icons/HamburgerIcon.vue";
import BasketIcon from "../Icons/BasketIcon.vue";
import ProfileIcon from "../Icons/ProfileIcon.vue";

import { Colors } from "~/utils/Colors";

export default {
  components: { MainButton, HamburgerIcon, BasketIcon, ProfileIcon },
  props: {
    isLogged: Boolean,
    isOnboarding: Boolean,
  },
  data() {
    return {
      Colors,
    };
  },
};
</script>

<style>
</style>