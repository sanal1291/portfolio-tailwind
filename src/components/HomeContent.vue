<template>
  <div class="bg-green-200">
    <div class="mx-auto max-w-4xl">
      <carousel :carouselSlides="carouselSlides" class="relative w-full h-20">
        <div
          class="absolute top-0 left-0 w-full h-full max-h-full"
          v-for="slide in carousel"
          :key="slide.id"
        >
          <slide :slide="slide" :id="slide.id" class="" transition="slide">
            <div v-if="currentSlide === slide.id" class="slide w-full h-full">
              <loading v-if="currentSlide == 0"></loading>
              <img
                v-else
                class="w-full h-full object-cover"
                :src="require(`../assets/carousel/${slide.img}`)"
                :alt="slide.id"
              /></div
          ></slide>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Loading from "./loading.vue";
import Slide from "./Slide.vue";
export default {
  components: { Carousel, Slide, Loading },
  setup() {
    const carouselSlides = [
      { id: 1, img: "A.webp" },
      { id: 2, img: "B.webp" },
    ];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
</style>