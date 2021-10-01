<template>
  <div>
    <slot :currentSlide="currentSlide" />

    <!-- navigation optional-->
    <div class="navigation">
      <div class="toggle-page left">
        <i @click="preSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- pagination optional  -->
    <div class="pagination">
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
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  props: ["navigation", "pagination", "autoPlayOn", "timeOut"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.autoPlayOn === undefined ? true : props.autoPlayOn
    );
    const timeoutDuration = ref(1000);
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
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };
    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.getElementsByClassName("slide").length;
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