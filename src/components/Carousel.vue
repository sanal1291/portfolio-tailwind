<template>
  <div class="relative w-full">
    <slot :currentSlide="currentSlide" />

    <!-- navigation optional-->
    <div class="absolute navigation flex w-full h-full justify-between">
      <div class="toggle-page my-auto">
        <i
          @click="preSlide"
          class="fas fa-chevron-left"
          v-if="navigationEnabled"
        ></i>
      </div>
      <!-- pagination -->
      <div class="flex gap-2 p-2 mt-auto" v-if="paginationEnabled">
        <span
          class="cursor-pointer w-4 h-4 rounded-full bg-white shadow-sm"
          @click="goToSlide(index)"
          v-for="(item, index) in getSlideCount"
          :key="index"
          :class="{ 'bg-green-200': index + 1 === currentSlide }"
        >
        </span>
      </div>
      <!-- end pagination -->
      <div class="toggle-page my-auto">
        <i
          @click="nextSlide"
          class="fas fa-chevron-right"
          v-if="navigationEnabled"
        ></i>
      </div>
    </div>
    <!-- end navigation -->
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  props: [
    "navigation",
    "pagination",
    "autoPlayOn",
    "timeOut",
    "routeTo",
    "carouselSlides",
    "lazy",
  ],
  setup(props, { emit }) {
    const router = useRouter();
    const currentSlide = ref(null);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.autoPlayOn === undefined ? true : props.autoPlayOn
    );
    const CarouselSlides = ref(props.carouselSlides.value);
    const timeoutDuration = ref(
      props.timeOut != undefined ? props.timeOut : false
    );
    const paginationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navigationEnabled = ref(
      props.navigation === undefined ? true : props.navigation
    );

    const nextSlide = () => {
      if (currentSlide.value == getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const preSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      console.log("const time");
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    const loadImgs = () => {
      let promises = [];
      for (let i = 0; i < props.carouselSlides.length; i++) {
        promises.push(
          new Promise((res, rej) => {
            if (props.carouselSlides[i].id === 0) {
              res();
              return;
            }
            let url = props.carouselSlides[i].img;
            let img = new Image();
            img.onload = () => {
              res(img);
            };
            img.onerror = () => {
              rej(img);
            };
            img.src = require(`../${url}`);
          })
        );
      }
      Promise.all(promises).then(() => {
        currentSlide.value = 1;
      });
    };

    if (autoPlayEnabled.value) {
      if (timeoutDuration.value) {
        autoPlay();
      }
    }
    watch(currentSlide, (n, o) => {
      if (currentSlide.value == 0) {
        loadImgs();
        return;
      }
      let index = n;
      if (autoPlayEnabled.value && !timeoutDuration.value) {
        setTimeout(() => {
          if (index === currentSlide.value) {
            if (currentSlide.value == getSlideCount.value) {
              // switch loading done
              emit("carouselDone");
              return;
            }
            currentSlide.value += 1;
          }
        }, props.carouselSlides[n - 1].time ?? 2000);
      }
    });

    onMounted(() => {
      getSlideCount.value =
        document.getElementsByClassName("slide-parent").length - 1;
      currentSlide.value = 0;
    });
    return {
      currentSlide,
      getSlideCount,
      nextSlide,
      preSlide,
      goToSlide,
      paginationEnabled,
      navigationEnabled,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  i {
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: aqua;
    opacity: 0.5;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
  }
}
</style>