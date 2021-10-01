<template>
  <carousel class="carousel relative" v-slot="{ currentSlide }">
    <slide
      class="slide absolute top-0 left-0"
      v-for="(slide, index) in carouselSlides"
      :key="index"
    >
      <div class="" v-show="currentSlide === index + 1">
        <img :src="require(`../assets/${slide.img}`)" :alt="index" />
      </div>
    </slide>
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
    const carouselSlides = ref([
      { img: "bg-1.jpg", time: 1000 },
      { img: "bg-2.jpg", time: 1000 },
      { img: "bg-3.jpg", time: 1000 },
      { img: "bg-4.png", time: 1000 },
      { img: "bg-5.jpg", time: 1000 },
    ]);
    return { carouselSlides };
  },
};
</script>

<style lang="scss" >
.carousel {
  max-height: 100vh;
  height: 100vh;

  .slide {
    width: 100%;
    height: 100%;
    max-height: 100%;

    div {
      height: 100%;
      img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>