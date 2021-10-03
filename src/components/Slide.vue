<template>
  <div>
    <transition name="slide"> <slot /> </transition>
  </div>
</template>

<script>
export default {
  props: ["slide"],
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
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
  transition: opacity 1s ease-in-out;
}
</style>