<template>
  <navbar />
  <home-content class="h-screen bg-green-200" />
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeContent from "../components/HomeContent.vue";
export default {
  components: {
    Navbar,
    HomeContent,
  },
};
</script>

<style lang="scss" scoped>
</style>