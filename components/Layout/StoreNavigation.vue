<template>
  <div
    :class="`flex flex-col nav-container height-transition rounded-md bg-mainBold fixed ${expanded ? 'top-0 left-0 right-0 h-[100vh] rounded-none' : 'top-1 left-1 right-1 h-[60px]'} z-10`">

    <nav class="flex items-center justify-between px-3 py-4">
      <nuxt-link to="/">
        <img class="w-28" src="~/assets/images/common/logo.png" alt="dopla logo" />
      </nuxt-link>

      <div v-if="navType === NavType.ONBOARDING"></div>

      <div v-else-if="navType === NavType.STORE" class="flex items-center gap-2">
        <nuxt-link to="/profile">
          <profile-icon :size="20" :color="Colors.white" />
        </nuxt-link>
        <button :class="`p-1 rounded ${showCard ? 'bg-white' : ''}`" @click.prevent="setShowCard(!showCard)">
          <basket-icon :size="20" :color="showCard ? Colors.greenBold : Colors.white" />
        </button>
        <button @click="setExpanded(!expanded)"><hamburger-icon :color="Colors.white" /></button>
      </div>

      <div v-else class="flex items-center gap-2">
        <nuxt-link class="text-white text-xs" to="/store">
          Log in
        </nuxt-link>
        <main-button to="/onboarding" text-class="text-xs" class-name="py-1 px-2" title="BEGIN" />
        <button @click="setExpanded(!expanded)">
          <close-icon v-if="expanded" size="medium" :color="Colors.white" />
          <hamburger-icon v-else :color="Colors.white" />
        </button>
      </div>
    </nav>

    <home-nav v-if="expanded" @on-redirect="setExpanded(false)" />
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MainButton from "../Button/MainButton.vue";
import HamburgerIcon from "../Icons/HamburgerIcon.vue";
import BasketIcon from "../Icons/BasketIcon.vue";
import ProfileIcon from "../Icons/ProfileIcon.vue";
import CloseIcon from "../Icons/CloseIcon.vue";
import HomeNav from "./HomeNav.vue";

import { Colors } from "~/utils/Colors";
import { NavType } from "~/types/NavType";
export default defineComponent({
  components: { MainButton, HamburgerIcon, BasketIcon, ProfileIcon, CloseIcon, HomeNav },
  props: {
    isLogged: Boolean,
    isOnboarding: Boolean,
    navType: String,
  },
  setup() {
    const expanded = ref(false);
    const showCard = ref(false);

    function setExpanded(newValue: boolean) {
      expanded.value = newValue
    }

    function setShowCard(show: boolean) {
      showCard.value = show;
    }

    return {
      expanded,
      showCard,
      setExpanded,
      setShowCard,
    }
  },
  data() {
    return {
      Colors,
      NavType,
    };
  },

});
</script>

<style>
.nav-container {
  transition: all 200ms linear;
}
</style>