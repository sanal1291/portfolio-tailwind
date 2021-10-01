<template>
  <carousel
    class="carousel relative h-screen w-screen"
    v-slot="{ currentSlide, nextSlideAuto }"
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
      <slide
        @shownext="nextSlideAuto"
        class="slide object-cover w-full h-full"
        v-if="currentSlide === slide.id"
        :slide="slide"
      >
        <img :src="require(`../assets/${slide.img}`)" :alt="slide.id" />
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
      { id: 1, img: "bg-1.jpg", time: 3000 },
      { id: 2, img: "bg-2.jpg", time: 2000 },
      { id: 3, img: "bg-3.jpg", time: 2000 },
      { id: 4, img: "bg-4.png", time: 2000 },
      { id: 5, img: "bg-5.jpg", time: 2000 },
    ];
    const print = () => {
      console.log("hello");
    };
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