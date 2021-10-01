<template>
  <div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>