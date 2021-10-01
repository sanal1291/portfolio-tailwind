<template>
  <div>
    <transition name="slide"> <slot /> </transition>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["slide"],
  setup(props, { emit }) {
    onMounted(() => {
      setTimeout(() => {
        console.log("timeoutfn");
        emit("shownext", props.slide.id);
      }, props.slide.time);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.slide {
  div {
    transition: all 0.2s ease-in-out;
  }
}
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
  transition: opacity 0.3s ease-in-out;
}
</style>