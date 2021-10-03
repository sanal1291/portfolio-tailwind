<template>
  <div>
    <transition name="slide"> <slot /> </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide {
  div {
    transition: all 0.2s ease-in-out;
  }
}
.slide-enter-from {
  opacity: 0.5;
}
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