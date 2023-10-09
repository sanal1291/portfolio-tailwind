<template>
    <div class="relative">
        <div class="carousel relative w-full aspect-w-16 aspect-h-8">
            <div class="carousel-images absolute inset-0 flex">
                <img v-for="(image, index) in images" :key="index" :src="require(`../${image}`)"
                    :class="{ 'opacity-100': index === currentIndex, 'opacity-0': index !== currentIndex }"
                    class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out" />
            </div>

        </div>
        <div class="carousel-indicators absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span v-for="(image, index) in images" :key="index"
                :class="{ 'bg-blue-500': index === currentIndex, 'bg-gray-300': index !== currentIndex }"
                class="w-2 h-2 rounded-full cursor-pointer" @click="goToSlide(index)"></span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        images: Array,
    },
    setup(props) {
        const { ref, watchEffect } = require('vue');
        const currentIndex = ref(0);

        // Auto-transition logic
        let intervalId;
        watchEffect((onInvalidate) => {
            intervalId = setInterval(() => {
                currentIndex.value = (currentIndex.value + 1) % props.images.length;
            }, 3000);

            onInvalidate(() => {
                clearInterval(intervalId);
            });
        });

        // Function to go to a specific slide
        const goToSlide = (index) => {
            currentIndex.value = index;
        };
        return {
            currentIndex,
            goToSlide,
        };
    },
};
</script>

  
<style scoped>
/* Add any additional SCSS styles here if needed */
</style>
  