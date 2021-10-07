<template>
  <div style="background-color: #ebebeb">
    <div class="mx-auto">
      <carousel
        class="aspect-w-16 aspect-h-8 overflow-hidden"
        :carouselSlides="carouselSlides"
        :autoPlayOn="true"
        :timeOut="10000"
        v-slot="{ currentSlide }"
      >
        <div
          class="slide-parent absolute top-0 left-0 w-full h-full max-h-full"
          v-for="slide in carouselSlides"
          :key="slide.id"
        >
          <slide :slide="slide" :id="slide.id" class="" transition="slide">
            <div v-if="currentSlide === slide.id" class="slide w-full h-full">
              <loading v-if="currentSlide == 0"></loading>
              <img
                v-else
                class="w-full object-cover"
                :src="require(`../${slide.img}`)"
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
      { id: 0 },
      { id: 1, img: "assets/carousel/A.webp" },
      { id: 2, img: "assets/carousel/B.webp" },
    ];
    return { carouselSlides };
  },
};
</script>

<style lang="scss" scoped>
</style>