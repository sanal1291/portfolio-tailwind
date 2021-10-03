<template>
  <carousel
    class="carousel relative h-screen w-screen"
    v-slot="{ currentSlide }"
    :carouselSlides="carouselSlides"
    :pagination="true"
    :navigation="true"
    :autoPlayOn="true"
    routeTo="/home"
  >
    <div
      class="slide-parent absolute top-0 left-0 w-full h-full max-h-full"
      v-for="slide in carouselSlides"
      :key="slide.id"
    >
      <slide :slide="slide" :id="slide.id" class="w-full h-full">
        <div v-if="currentSlide === slide.id" class="slide w-full h-full">
          <img
            class="w-full h-full object-cover"
            :src="require(`../assets/${slide.img}`)"
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
      { id: 1, img: "a.jpg", time: 2000 },
      { id: 2, img: "b.jpg", time: 2000 },
      { id: 3, img: "c.jpg", time: 2000 },
      { id: 4, img: "d.jpg", time: 1000 },
      { id: 5, img: "e.jpg" },
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