<template>
  <nav
    class="
      shadow-lg
      bg-scroll
      sticky
      md:fixed
      top-0
      z-50
      w-full
      bg-white
      md:bg-transparent
    "
  >
    <div class="max-w-6xl mx-auto px-4 transition-all duration-200">
      <div class="flex justify-between">
        <a href="#" class="flex items-center py-4 px-2">
          <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
          <span class="font-semibold text-black-800 text-lg">Title</span>
        </a>
        <div class="hidden md:flex items-center space-x-1">
          <a
            v-for="(nav, index) in navs"
            :key="index"
            @click="scrollToView(nav.name)"
            class="
              capitalize
              py-4
              px-2
              hover:text-black
              transition
              duration-300
              font-semibold
            "
            :class="
              path == nav.id
                ? 'text-green-500 border-b-4 border-green-500'
                : 'text-black-500'
            "
            >{{ nav.name }}</a
          >
        </div>
        <!-- mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none" @click="toggleMenu">
            <svg
              class="w-6 h-6 text-gray-500 hover:text-green-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- moible menu list -->
    <div v-show="mobileMenu" class="md:hidden">
      <ul class="">
        <li class="active" v-for="(nav, index) in navs" :key="index">
          <a
            @click="scrollToView(nav.name)"
            class="block text-sm px-2 py-4 capitalize opacity-90 bg-white"
            :class="
              path == nav.id
                ? 'text-white bg-green-500 font-semibold'
                : 'hover:bg-green-500 transition duration-300'
            "
            >{{ nav.name }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const navs = ref([
      { id: 1, name: "home", url: "#" },
      { id: 2, name: "about", url: "#" },
      { id: 3, name: "projects", url: "#" },
    ]);
    const mobileMenu = ref(false);
    const toggleMenu = () => {
      mobileMenu.value = !mobileMenu.value;
    };
    const scrollToView = (id) => {
      mobileMenu.value = false;
      let el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    // intersecrion observer to navigation
    // const path = ref(1)
    // const observers = ref([])
    // onMounted(()=>{
    //   navs.value.forEach(nav=>)
    // })
    //

    return {
      navs,
      toggleMenu,
      mobileMenu,
      scrollToView,
    };
  },
};
</script>
<style lang="">
</style>
