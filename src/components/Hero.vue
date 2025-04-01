<script setup>
import Heading_1 from "../components/basket/Heading_1.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import { cn } from "../utils/cn";
import { RouterLink } from "vue-router";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import profilephoto from "../assets/profilephoto.png";

const socialnetworks = [
  { icon: "bi-twitter", href: "https://twitter.com/FidelisMbah" },
  {
    icon: "pr-linkedin",
    href: "https://www.linkedin.com/in/fidelis-mbah-0a219913/",
  },
  { icon: "co-facebook", href: "#" },
  {
    icon: "bi-youtube",
    href: "https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber",
  },
  {
    icon: "bi-instagram",
    href: "https://www.instagram.com/fidelismbah/?hl=en",
  },
];
</script>

<template>
  <section
    :class="
      cn(
        'relative bg-cover bg-center bg-no-repeat pt-72 pb-40 px-5 lg:px-20 lg:grid grid-cols-2 min-h-screen',
        `bg-[url(/photocolage.svg)]`
      )
    "
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/70 lg:bg-primary-500/70 flex"
    >
      <DotLottieVue
        style="height: 500px; width: 500px; opacity: 0.5"
        autoplay
        loop
        src="https://lottie.host/ef5a86a3-8b44-42f4-b6d7-a7871e0a93f4/HTEUmKzzH3.lottie"
      />
      <DotLottieVue
        style="height: 500px; width: 500px; opacity: 0.5"
        autoplay
        loop
        src="https://lottie.host/ef5a86a3-8b44-42f4-b6d7-a7871e0a93f4/HTEUmKzzH3.lottie"
      />
    </div>

    <div class="relative z-20 grid grid-rows-[auto_auto_auto] gap-10 lg:gap-5">
      <div class="mb-10">
        <Heading_1 content="Fidelis Mbah." class="text-white !text-5xl mb-5" />

        <Paragraph class-name="text-2xl text-white font-bold">
          <VueWriter
            :array="[
              'Journalism',
              'Media Relations',
              'Crisis Communication',
              'Strategic Communications Advocacy',
            ]"
            :typeSpeed="50"
          />
        </Paragraph>
      </div>

      <div>
        <RouterLink
          to="/about"
          class="text-sm py-3 px-6 border border-white rounded-full font-bold text-white hover:bg-primary-500 transition-all"
        >
          <span> LEARN MORE </span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>

      <div>
        <ul class="flex space-x-4 text-white">
          <li v-for="social of socialnetworks">
            <a :href="social.href" target="_blank">
              <v-icon :name="social.icon" scale="1" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="relative">
      <div class="absolute z-10 -bottom-40">
        <img :src="profilephoto" alt="Contact Me" class="hidden lg:block" />
      </div>
    </div>
  </section>
</template>
