<template>
  <transition name="slide">
    <slot />
  </transition>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["slide"],
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(() => {
        emit("shownext", props.slide.id);
      }, props.slide.time);
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
  transition: opacity 0.1s ease-in-out;
}
</style>