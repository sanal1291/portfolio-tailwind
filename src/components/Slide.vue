<template>
  <div>
    <transition :name="transitionAni"> <slot /> </transition>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
export default {
  props: ["transition"],
  setup(props) {
    const transitionAni = ref(props.transition);
    onMounted(() => {});
    return { transitionAni };
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-from {
  opacity: 0;
}
.slide-leave-to {
  opacity: 0.7;
}
.slide-enter-to,
.silde-leave-from {
  opacity: 1;
}
.slide-enter-active {
  transition: opacity 1s ease-in;
}
.slide-leave-active {
  transition: all 1s ease-in;
}
</style>