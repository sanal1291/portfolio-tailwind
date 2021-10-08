<template>
  <div id="HomeContent" class="max-h-full">
    <navbar id="navbar" />
    <home-content id="home" />
    <about id="about"></about>
    <projects id="projects"></projects>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeContent from "../components/HomeContent.vue";
import {
  onMounted,
  onUnmounted,
  ref,
  watch,
  watchEffect,
} from "@vue/runtime-core";
import About from "../components/about.vue";
import Projects from "../components/projects.vue";
export default {
  components: {
    Navbar,
    HomeContent,
    About,
    Projects,
  },
  setup() {
    // scrolling logic not working yet cant get scrolltop
    const home = ref(null);
    // scolling end
    const scrolled = (e) => {
      console.log(document.getElementById("app").scrollTop);
    };
    const removeScrollListener = () => {
      console.log("hi");
    };
    onMounted(() => {
      let app = document.getElementById("app");
      app.addEventListener("scroll", (e) => {
        console.log("hi");
      });
    });
    onUnmounted(() => {
      document
        .getElementById("app")
        .removeEventListener("scroll", removeScrollListener);
    });
    return { home };
  },
};
</script>

<style lang="scss" scoped>
</style>