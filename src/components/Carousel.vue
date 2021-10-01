<template>
  <div>
    <slot :currentSlide="currentSlide" />
    <div class="navigation">
      <div class="toggle-page left">
        <i @click="preSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  props: ["slideCount"],
  setup() {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);

    const nextSlide = () => {
      if (currentSlide.value == getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const preSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    onMounted(() => {
      getSlideCount.value = document.getElementsByClassName("slide").length;
    });
    return { currentSlide, getSlideCount, nextSlide, preSlide };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: aqua;
    opacity: 0.5;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
}
</style>