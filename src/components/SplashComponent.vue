<template>
    <div v-if="showSplash" :class="opacityClass"
        class="splash-screen flex flex-col justify-center items-center bg-[#002140] w-screen h-screen fixed top-0 left-0 z-[9999] transition-opacity duration-500">

        <img src="@/assets/logo_and_name.jpeg" alt="Main Splash Image" class="w-4/5 md:w-1/3 h-auto mb-8 md:mb-16">

        <img src="@/assets/splash_footer.jpeg" alt="Bottom Splash Image" class="w-3/4 md:w-1/4 h-auto mb-2 md:mb-4">
    </div>
</template>


<script>
import { ref, onMounted } from "vue";

export default {
    name: 'SplashComponent',
    setup() {
        const showSplash = ref(true);
        const opacityClass = ref("opacity-100");

        onMounted(() => {
            setTimeout(() => {
                opacityClass.value = "opacity-0";
                setTimeout(() => {
                    showSplash.value = false;
                }, 500); // This should match the duration of the fade-out transition
            }, 1000);
        });

        return { showSplash, opacityClass };
    }
};
</script>
