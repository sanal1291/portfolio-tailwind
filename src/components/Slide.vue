<template>
  <div>
    <transition name="slide"> <slot /> </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide-enter-from {
  opacity: 0.7;
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
  transition: all 1s ease-out;
}
</style>