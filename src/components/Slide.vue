<template>
  <div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      console.log("hi");
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.silde-leave-from,
.slide-enter-to {
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease-in-out;
}
</style>