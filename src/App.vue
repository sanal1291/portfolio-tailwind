<template>
  <div class="flex flex-col sm:flex-row bg-yellow-200 dark:bg-yellow-800">
    <navbar class="sm:w-1/4 h-14 sm:h-screen bg-green-200" />
    <home class="h-screen sm:w-3/4" />
  </div>
</template>
<script>
import home from "@/views/Home";
import Navbar from "./components/navbar.vue";
export default {
  components: {
    home,
    Navbar,
  },
};
</script>

Home