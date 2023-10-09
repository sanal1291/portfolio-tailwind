<template>
  <section style="background-color: #ebebeb">
    <div class="mx-auto">
      <Carousel :images="imageList" />
    </div>
  </section>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  components: { Carousel },
  setup() {
    const imageList = [
      "assets/coverpage/A01 (2).jpg",
      "assets/coverpage/A03.jpg",
      "assets/coverpage/A05.jpg",
      "assets/coverpage/1st dot.jpg",
      "assets/coverpage/2nd dot_new.jpg",
      "assets/coverpage/3rd dot.jpg",
      "assets/coverpage/4th dot.jpg",
      "assets/coverpage/5.jpg",
      "assets/coverpage/6th dot.jpg",
      "assets/coverpage/g.webp",
      "assets/coverpage/add8.jpg",
    ];

    return { imageList };
  },
};
</script>

<style lang="scss" scoped></style>