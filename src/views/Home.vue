<template>
  <navbar />
  <home-content class="h-screen" id="home" />
  <div class="h-screen bg-yellow-400" id="about">about</div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeContent from "../components/HomeContent.vue";
import { onMounted, ref, watch } from "@vue/runtime-core";
export default {
  components: {
    Navbar,
    HomeContent,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>