<template>
  <div class="flex flex-col sm:flex-row bg-yellow-200 dark:bg-yellow-800">
    <navbar class="sm:w-1/4 h-14 sm:h-screen bg-green-200" />
    <!-- <content class="h-screen sm:w-3/4"></content> -->

    <home-content />
  </div>
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