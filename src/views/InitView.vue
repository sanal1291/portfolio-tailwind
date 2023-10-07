<template>
    <splash-component />
    <home />
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-unused-components */
import { ref } from "@vue/reactivity";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Loading from "../components/loading.vue";
import Home from "../views/Home.vue";
import SplashComponent from "@/components/SplashComponent.vue";
export default {
    components: {
        Carousel,
        Slide,
        Loading,
        Home,
        SplashComponent
    },
    setup() {
        const carouselSlides = [
            { id: 0 },
            { id: 1, img: "assets/initial/a.webp", time: 2500 },
            { id: 2, img: "assets/initial/b.webp", time: 2500 },
            { id: 3, img: "assets/initial/c.webp", time: 2500 },
            { id: 4, img: "assets/initial/d.webp", time: 1000 },
            { id: 5, img: "assets/initial/e.webp", time: 2000 },
        ];
        const loadingDone = ref(false);

        const toHome = () => {
            loadingDone.value = true;
        };
        return { carouselSlides, loadingDone, toHome };
    },
};
</script>

<style lang="scss" scoped>
.slide-1 {
    background-image: url("~@/assets/backgrounds/55.webp");
    background-size: cover;
}

.slide {
    background-size: cover;
    background-image: url("~@/assets/backgrounds/49.webp");
}
</style>