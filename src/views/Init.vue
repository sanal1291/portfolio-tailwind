<template>
  <home v-if="loadingDone" />
  <carousel
    v-else
    @carouselDone="toHome"
    class="carousel relative h-screen w-screen"
    v-slot="{ currentSlide }"
    :carouselSlides="carouselSlides"
    :pagination="false"
    :navigation="false"
    :autoPlayOn="true"
  >
    <div
      class="slide-parent absolute top-0 left-0 w-full h-full max-h-full"
      v-for="slide in carouselSlides"
      :key="slide.id"
    >
      <slide
        :slide="slide"
        :id="slide.id"
        class="w-full h-full"
        transition="slide"
      >
        <div v-if="currentSlide === slide.id" class="slide w-full h-full">
          <loading v-if="currentSlide == 0"></loading>
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
import Loading from "../components/loading.vue";
import Home from "../views/Home.vue";
export default {
  components: {
    Carousel,
    Slide,
    Loading,
    Home,
  },
  setup() {
    const carouselSlides = [
      { id: 0 },
      { id: 1, img: "a.webp", time: 2000 },
      // { id: 2, img: "b.webp", time: 2000 },
      // { id: 3, img: "c.webp", time: 900 },
      // { id: 4, img: "d.webp", time: 2000 },
      // { id: 5, img: "e.webp" },
    ];
    const loadingDone = ref(false);

    const toHome = () => {
      loadingDone.value = true;
    };
    return { carouselSlides, loadingDone, toHome };
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