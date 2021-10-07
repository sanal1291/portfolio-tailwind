<template>
  <navbar />
  <home-content id="home" />
  <about></about>
  <projects></projects>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeContent from "../components/HomeContent.vue";
import { onMounted, ref, watch } from "@vue/runtime-core";
import About from "../components/about.vue";
import Projects from "../components/projects.vue";
export default {
  components: {
    Navbar,
    HomeContent,
    About,
    Projects,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>