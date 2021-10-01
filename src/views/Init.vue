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
      { id: 1, img: "bg-1.jpg" },
      { id: 2, img: "bg-2.jpg", time: 4000 },
      { id: 3, img: "bg-3.jpg", time: 6000 },
      { id: 4, img: "bg-4.png" },
      { id: 5, img: "bg-5.jpg" },
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