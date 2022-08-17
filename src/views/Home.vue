<template>
  <div id="HomeContent" class="max-h-full">
    <navbar id="navbar" />
    <home-content id="home" />
    <about id="about"></about>
    <projects id="projects"></projects>
    <div class="w-full  h-80 px-4 md:h-screen py-8">
      <ArtboxIframe></ArtboxIframe>
    </div>
    <router-link :to="{ name: '3dview' }">
      <div class="text-center  w-40 mx-auto">
        <div class="hover:border-green-500 rounded-full border-gray-900 border-2">
          View in Fullscreen
        </div>
      </div>
    </router-link>
    <br />
    <ContactUs id="contact_us"></ContactUs>
    <Footer></Footer>
    <div class="fixed bottom-0 left-0 p-1 w-10 h-10 m-4 text-center rounded-full" style="background-color: #25d366">
      <a target="_blank" href="https://wa.me/+919567746540">
        <i class="fab fa-2x fa-whatsapp text-white"></i></a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import HomeContent from "../components/HomeContent.vue";
import {
  onMounted,
  onUnmounted,
  ref,
} from "@vue/runtime-core";
import About from "../components/about.vue";
import Projects from "../components/projects.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "../components/Footer.vue";
import ArtboxIframe from "@/components/ArtboxIframe.vue";
export default {
  components: {
    Navbar,
    HomeContent,
    About,
    Projects,
    ContactUs,
    Footer,
    ArtboxIframe
  },
  setup() {
    // scrolling logic not working yet cant get scrolltop
    const home = ref(null);
    // scolling end
    // const scrolled = (e) => {
    //   console.log(document.getElementById("app").scrollTop);
    // };
    const removeScrollListener = () => {
      console.log("hi");
    };
    onMounted(() => {
      let app = document.getElementById("app");
      app.addEventListener("scroll", () => {
        console.log("hi");
      });
    });
    onUnmounted(() => {
      document
        .getElementById("app")
        .removeEventListener("scroll", removeScrollListener);
    });
    return { home };
  },
};
</script>

<style lang="scss" scoped>
</style>