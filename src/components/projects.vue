<template>
  <section class="p-5 max-w-6xl text-center mx-auto">
    <div class="text-center text-5xl font-mono">Projects</div>
    <br />
    <div class="bg-black h-0.5 w-40 rounded-full mx-auto"></div>
    <br />
    <div class="flex justify-center flex-wrap">
      <div class="w-full p-5 md:w-1/2" v-for="(item, index) in projectsl" :key="index">
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
    <div class="flex justify-center flex-wrap">
      <div class="w-full p-5 md:w-1/2" v-for="(item, index) in projectsp" :key="index">
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

    <!-- <div class="flex justify-center flex-wrap">
      <div class="w-full p-5 md:w-1/2">
        <img
          class="
            transition
            duration-500
            ease-in-out
            bg-blue-600
            transform
            hover:-translate-y-1 hover:scale-110
          "
          :src="require(`../${ty}`)"
          alt=""
        />
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  setup() {
    const projectsl = [
      "assets/projects/1.jpg",
      "assets/projects/2.jpg",
      "assets/projects/3.jpg",
      "assets/projects/4.jpg",
      "assets/projects/5.jpg",
      "assets/projects/6.jpg",
      "assets/projects/7.jpg",
      "assets/projects/8.jpg",
      "assets/projects/9.jpg",
      "assets/projects/10.jpg",
      "assets/projects/A01 (1).jpg",
      "assets/projects/A04.jpg",
      "assets/projects/A06.jpg",
      "assets/projects/A07.jpg",
      "assets/projects/extra sheet2 before page 11.jpg",
    ];
    const projectsp = [
      "assets/projects/p-1.webp",
      "assets/projects/p-2.webp",
      "assets/projects/p-3.webp",
      "assets/projects/p-4.webp",
      "assets/projects/p-5.webp",
      "assets/projects/p-6.webp",
      "assets/projects/p-7.webp",
      "assets/projects/p-8.jpg",
      "assets/projects/p-9.jpg",
    ];
    // const ty = "assets/projects/ty.webp";
    return { projectsl, projectsp };
  },
};
</script>

<style lang="scss" scoped></style>