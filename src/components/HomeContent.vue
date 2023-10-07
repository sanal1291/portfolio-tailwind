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
      "assets/coverpage/1st dot.jpg",
      "assets/coverpage/2nd dot.jpg",
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