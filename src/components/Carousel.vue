<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <!-- navigation optional-->
    <div class="navigation" v-if="navigationEnabled">
      <div class="toggle-page left">
        <i @click="preSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- pagination optional  -->
    <div class="pagination" v-if="paginationEnabled">
      <span
        @click="goToSlide(index)"
        v-for="(item, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
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
      console.log(props.carouselSlides.length);
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
            img.src = require(`../assets/initial/${url}`);
          })
        );
      }
      Promise.all(promises).then(() => {
        console.log("all done");
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
        console.log(props.carouselSlides[n - 1].time);
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
        document.getElementsByClassName("slide-parent").length;
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
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.pagination {
  position: absolute;
  bottom: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
  .active {
    background-color: aqua;
  }
}
</style>