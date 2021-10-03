<template>
  <carousel
    class="carousel relative h-screen w-screen"
    v-slot="{ currentSlide }"
    :carouselSlides="carouselSlides"
    :pagination="false"
    :navigation="false"
    :autoPlayOn="true"
    routeTo="/home"
  >
    <div
      class="slide-parent absolute top-0 left-0 w-full h-full max-h-full"
      v-for="slide in carouselSlides"
      :key="slide.id"
    >
      <slide :slide="slide" :id="slide.id" class="w-full h-full">
        <div
          v-if="currentSlide != 0 && currentSlide === slide.id"
          class="slide w-full h-full"
        >
          <div class="w-full h-full" v-if="cuurentSlide == 0">loading</div>
          <img
            v-else
            class="w-full h-full object-cover"
            :src="require(`../assets/initial/${slide.img}`)"
            :alt="slide.id"
          />
        </div>
      </slide>
    </div>
  </carousel>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import { ref } from "@vue/reactivity";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
export default {
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carouselSlides = [
      { id: 0 },
      { id: 1, img: "a.webp", time: 1000 },
      { id: 2, img: "b.webp", time: 1000 },
      { id: 3, img: "c.webp", time: 1000 },
      { id: 4, img: "d.webp", time: 800 },
      { id: 5, img: "e.webp" },
    ];
    return { carouselSlides, print };
  },
};
</script>

<style lang="scss" >
.carousel {
  .slide-parent {
    max-height: 100%;
  }
}
</style>