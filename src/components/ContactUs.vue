<template>
    <section style="background-color: #e9e9e9">
        <div class="p-5 max-w-6xl text-center mx-auto">
            <div class="text-center text-5xl font-mono">Contact us</div>
            <br />
            <div class="bg-black h-0.5 w-40 rounded-full mx-auto"></div>
            <br />
            <div class="flex justify-center flex-wrap">
                <div class="w-full p-5 md:w-1/2" v-for="(item, index) in cards" :key="index">
                    <img class="
            transition
            duration-500
            ease-in-out
            bg-blue-600
            transform
            hover:-translate-y-1 hover:scale-110
          " :src="require(`../${item}`)" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        const cards = [
            "assets/cards/card.jpg",
        ];
        // const ty = "assets/projects/ty.webp";
        return { cards };
    },
};
</script>

<style lang="scss" scoped></style>